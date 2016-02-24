angular.module('app.modules')
       .directive('cards',cards);

function cards(){
  var directive = {
    controller: cardsCtrl,
    controllerAs: 'vm',
    templateUrl: 'app/moments/cards/cards.view.html',
    scope: {
      moments: '='
    },
    bindToController: true
  };
  return directive;

  function cardsCtrl($scope,$filter,angularGridInstance,appEvent) {
    var vm = this;
    var initialCardNum = 9;
    var newCardPerPage = 6;
    var currentCard = 0;
    var displayedMomentsMirror = [];

    vm.displayedMoments = [];
    vm.loadMore = loadMore;
    vm.featuredOnly = false;
    vm.safeOnly = true;

    init();
    /////////////

    function init(){
      vm.displayedMoments = [];
      displayedMomentsMirror = [];
      currentCard = 0;
      pushMoments(initialCardNum);
    }

    function deleteData(event,time){
      for(var i = 0 ; i< vm.displayedMoments.length; i++){
        if(vm.displayedMoments[i].time === time){
          vm.displayedMoments.splice(i,1);
          currentCard--;
          return;
        }
      }
    }

    function displayFilter(moment) {
      if(moment.featured == null){
        moment.featured = false;
      }
      if(moment.safe == null){
        moment.safe = true;
      }

      //Check if we could pass the feature toggle restrict
      var showFeatured = (!vm.featuredOnly) || (vm.featuredOnly && moment.featured);
      //Check if we could pass the mentle safe(lol) toggle restrict
      var showWeired = (!vm.safeOnly) || (vm.safeOnly && moment.safe);
      return showFeatured && showWeired;
    }

    function pushMoments(number){
      for(var i = 0; i<number; i++){
        if(vm.moments == null || vm.moments[currentCard] == null)
          return;
        //Ensure correct number of cards displayed when $filter is off
        displayedMomentsMirror.push(vm.moments[currentCard]);
        if(displayFilter(vm.moments[currentCard])){
          vm.displayedMoments.push(vm.moments[currentCard])
        }else{
          //Ensure Right Number Of Cards Added
          i--;
        }
        currentCard++;
      }
    }

    function loadMore(){
      pushMoments(newCardPerPage);
      // Digest is a must or we'll get nothing for ng-repeat
      $scope.$digest();
    }

    function handleToggle(param){
      return function handleCallback(event,display){
        if(display != true){
          display = false;
        }
        vm[param] = display;
        angularGridInstance.gallery.refresh();
        pushMoments(newCardPerPage);
        vm.displayedMoments = $filter('filter')(displayedMomentsMirror,displayFilter);
      }
    }

    appEvent.subscribe('toggleFeatured', handleToggle('featuredOnly'), $scope);
    appEvent.subscribe('toggleWeired', handleToggle('safeOnly'), $scope);
    appEvent.subscribe('deleteData', deleteData, $scope);

    $scope.$watch('vm.moments', function (value) {
        // Recerive new monthly Data
        init();
    });
  }
}
