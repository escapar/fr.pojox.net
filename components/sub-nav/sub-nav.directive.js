angular.module('app.components')
       .directive('jcSubNav',jcSubNav);

function jcSubNav(){
  var directive = {
    controller: subNavCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/sub-nav/sub-nav.tmpl.html',
    scope: {
      sections: '=jcSections',
      active: '=jcActive',
      settings: '=jcSettings'
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
