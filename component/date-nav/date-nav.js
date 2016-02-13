angular.module('app.components')
       .directive('dateNav',dateNav);

function dateNav(){
  var directive = {
    controller: dateNavCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/date-nav/date-nav.tmpl.html',
    scope: {
      months: '=',
      selectedMonth : '='
    },
    bindToController: true
  };
  return directive;

  function dateNavCtrl($rootScope,$document,$state,$scope) {
    var vm = this;
    vm.monthSelected = 0;
    vm.displayMonth = displayMonth;
    vm.featuredOnly = false;
    vm.safeOnly = true;
    vm.displaySettings = false;

    vm.toggleFeatured = toggleFeatured;
    vm.toggleWeired = toggleWeired;
    vm.getNavDateLabel = getNavDateLabel;
    vm.scrollTop = scrollTop;

    ///////////////////////////

    function scrollTop(){
      $document.scrollTop(64, 2000);
    }

    function toggleSettings(event,settings){
      vm.displaySettings = ! vm.displaySettings;
    }

    function displayMonth(month){
      vm.monthSelected = month;
      $state.go('moments.specified', { month: month });
      $rootScope.$broadcast('monthSwitched',month);
    }

    function getNavDateLabel(month){
      var year = month.substring(0, 2);
      var month = month.substring(2, 4);
      return month+'/'+year;
    }

    function toggleFeatured(){
      $rootScope.$broadcast('toggleFeatured',vm.featuredOnly);
    }

    function toggleWeired(){
      $rootScope.$broadcast('toggleWeired',vm.safeOnly);
    }

    $scope.$on('toggleSettings',toggleSettings);
  }
}
