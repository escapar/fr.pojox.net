angular.module('app.modules')
       .directive('cards',cards);

function cards(){
  var directive = {
    controller: cardsCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/cards/cards.view.html',
    scope: {
      data: '='
    },
    bindToController: true
  };
  return directive;

  function cardsCtrl($scope,$filter,angularGridInstance,appEvent) {
    var vm = this;
    var initialCardNum = 9;
    var newCardPerPage = 6;
    var currentCard = 0;
    var displayedDataMirror = [];

    vm.displayedData = [];
    vm.loadMore = loadMore;
    vm.featuredOnly = false;
    vm.safeOnly = true;

    init();
    /////////////

    function init(){
      vm.displayedData = [];
      displayedDataMirror = [];
      currentCard = 0;
      pushData(initialCardNum);
    }

    function deleteData(event,time){
      for(var i = 0 ; i< vm.displayedData.length; i++){
        if(vm.displayedData[i].time === time){
          vm.displayedData.splice(i,1);
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

    function pushData(number){
      for(var i = 0; i<number; i++){
        if(vm.data == null || vm.data[currentCard] == null)
          return;
        //Ensure correct number of cards displayed when $filter is off
        displayedDataMirror.push(vm.data[currentCard]);
        if(displayFilter(vm.data[currentCard])){
          vm.displayedData.push(vm.data[currentCard])
        }else{
          //Ensure Right Number Of Cards Added
          i--;
        }
        currentCard++;
      }
    }

    function loadMore(){
      pushData(newCardPerPage);
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
        pushData(newCardPerPage);
        vm.displayedData = $filter('filter')(displayedDataMirror,displayFilter);
      }
    }

    appEvent.subscribe('toggleFeatured', handleToggle('featuredOnly'), $scope);
    appEvent.subscribe('toggleWeired', handleToggle('safeOnly'), $scope);
    appEvent.subscribe('deleteData', deleteData, $scope);

    $scope.$watch('vm.data', function (value) {
        // Recerive new monthly Data
        init();
    });
  }
}
