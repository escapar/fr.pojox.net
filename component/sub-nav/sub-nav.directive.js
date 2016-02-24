angular.module('app.components')
       .directive('subNav',subNav);

function subNav(){
  var directive = {
    controller: subNavCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/sub-nav/sub-nav.tmpl.html',
    scope: {
      sections: '=',
      active: '=',
      settings: '='
    },
    bindToController: true
  };
  return directive;

  function subNavCtrl($scope,appEvent) {
    var vm = this;
    vm.displaySettings = false;

    ///////////////////////////

    function toggleSettings(event,settings){
      vm.displaySettings = ! vm.displaySettings;
    }
  }
}
