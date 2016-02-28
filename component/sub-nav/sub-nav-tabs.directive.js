angular.module('app.components')
       .directive('jcSubNavTabs',jcSubNavTabs);

function jcSubNavTabs(){
  var directive = {
    controller: subNavTabsCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/sub-nav/sub-nav-tabs.tmpl.html',
    require:'^jcSubNav',
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, subNavCtrl){
    scope.vm.tabs = subNavCtrl.sections;
    scope.vm.active = subNavCtrl.active;
  }

  function subNavTabsCtrl($rootScope,$document,$state,$scope,appEvent) {
    var vm = this;

    vm.displaySection = displaySection;
    vm.displaySettings = false;

    ///////////////////////////

    function scrollTop(){
      $document.scrollTop(0, 2000);
    }

    function displaySection(tab){
      scrollTop();
      $state.go(tab.state, tab.stateParam);
      appEvent.publish('jcSubNavSectionSwitched',tab);
    }

  }
}
