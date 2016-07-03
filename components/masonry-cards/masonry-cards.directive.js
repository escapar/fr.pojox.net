angular.module('app.modules')
       .directive('jcMasonryCards',jcMasonryCards);

function jcMasonryCards($q){
  var directive = {
    controller: masonryCardsCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/masonry-cards/masonry-cards.view.html',
    scope: {
      data: '=jcData',
      initialCardNum: '@jcInitNum',
      newCardPerPage: '@jcRefreshNum',
      customRefresh: '=jcCustomRefresh',
      customRefreshEnabled: '=jcCustomRefreshEnabled'
    },
    bindToController: true
  };
  return directive;

  function masonryCardsCtrl($scope,$filter,angularGridInstance,appEvent) {
    var vm = this;
    // Defaults
    var initialCardNum = vm.initialCard  ? parseInt(vm.initialCardNum, 10) : 15;
    var newCardPerPage = vm.newCardPerPage ? parseInt(vm.newCardPerPage, 10) : 6;
    var currentCard = 0;
    var displayedDataMirror = [];

    vm.displayedData = [];
    vm.loadMore = loadMore;
    vm.featuredOnly = false;
    vm.safeOnly = true;

    /////////////

    function handleChange(){
      if(vm.customRefreshEnabled){
        vm.displayedDataMirror = vm.data;
        vm.displayedData = $filter('filter')(vm.displayedDataMirror, displayFilter);
      }else{
        handleRefreshDisabled();
      }
    }

    function handleRefreshDisabled(){
      var initPush = true;
      vm.displayedData = [];
      displayedDataMirror = [];
      currentCard = 0;
      pushData(initialCardNum,initPush);
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

    function displayFilter(beat) {
      if(beat.featured == null){
        beat.featured = false;
      }
      if(beat.safe == null){
        beat.safe = true;
      }

      //Check if we could pass the feature toggle restrict
      var showFeatured = (!vm.featuredOnly) || (vm.featuredOnly && beat.featured);
      //Check if we could pass the mentle safe(lol) toggle restrict
      var showWeired = (!vm.safeOnly) || (vm.safeOnly && beat.safe);
      return showFeatured && showWeired;
    }

    function pushData(number,initPush){
      for(var i = 0; i<number; i++){
        if(vm.data == null || vm.data[currentCard] == null){
          return;
        }
        //Ensure correct number of cards displayed when $filter is off
        if(initPush){
          vm.data[currentCard].init = true;
        }
        displayedDataMirror.push(vm.data[currentCard]);
        if(displayFilter(vm.data[currentCard])){
          vm.displayedData.push(vm.data[currentCard]);
        }else{
          //Ensure Right Number Of Cards Added
          i--;
        }
        currentCard++;
      }

    }

    function loadMore(){
      if(vm.customRefreshEnabled){
        $scope.$apply(vm.customRefresh());
      }else{
        pushData(newCardPerPage);
      }
    }

    function handleToggle(param){
      return function handleCallback(event,display){
        if(display != true){
          display = false;
        }
        vm[param] = display;
        angularGridInstance.cards.refresh();
        pushData(newCardPerPage);
        vm.displayedData = $filter('filter')(displayedDataMirror,displayFilter);
      }
    }

    appEvent.subscribe('toggleFeatured', handleToggle('featuredOnly'), $scope);
    appEvent.subscribe('toggleWeired', handleToggle('safeOnly'), $scope);
    appEvent.subscribe('deleteData', deleteData, $scope);

    $scope.$watchCollection('vm.data', function () {
        // Recerive new monthly Data
        if(vm.data && vm.data.length){
          handleChange();
        }
    },true);

    $scope.$on('$repeatFinished', function(event, data) {
      angularGridInstance.cards.refresh();
    });
  }
}
