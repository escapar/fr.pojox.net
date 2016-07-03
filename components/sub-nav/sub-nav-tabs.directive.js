angular.module('app.components')
       .directive('jcSubNavTabs',jcSubNavTabs);

function jcSubNavTabs(){
  var directive = {
    controller: subNavTabsCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/sub-nav/sub-nav-tabs.tmpl.html',
    require:'^jcSubNav',
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, subNavCtrl){
    scope.subNavCtrl = subNavCtrl;
  }

  function subNavTabsCtrl($rootScope,$document,$state,$scope,appEvent) {
    var vm = this;

    vm.displaySection = displaySection;
    vm.displaySettings = false;

    ///////////////////////////

    function scrollTop(){
      $document.scrollTop(63.9, 2000);
    }

    function displaySection(tab){
      scrollTop();
      $state.go(tab.state, tab.stateParam);
      appEvent.publish('jcSubNavSectionSwitched',tab);
    }
  }
}
