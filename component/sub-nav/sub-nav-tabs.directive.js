angular.module('app.components')
       .directive('subNavTabs',subNavTabs);

function subNavTabs(){
  var directive = {
    controller: subNavTabsCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/sub-nav/sub-nav-tabs.tmpl.html',
    require:'^subNav',
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, subNavCtrl){
    scope.vm.subNavCtrl = subNavCtrl;
    scope.vm.tabs = subNavCtrl.sections;
    scope.vm.active = subNavCtrl.active;
  }

  function subNavTabsCtrl($rootScope,$document,$state,$scope,appEvent) {
    var vm = this;

    vm.displaySection = displaySection;
    vm.displaySettings = false;
    vm.scrollTop = scrollTop;

    ///////////////////////////

    function scrollTop(){
      $document.scrollTop(64, 2000);
    }

    function displaySection(tab){
      $state.go(tab.state, tab.stateParam);
      appEvent.publish('subNavSectionSwitched',tab);
    }

  }
}
