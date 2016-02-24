angular.module('app.components')
       .directive('appNav',appNav);

function appNav($state){
  var directive = {
    controller: appNavCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/app-nav/app-nav.tmpl.html',
    bindToController: true
  };
  return directive;

  function appNavCtrl(appNav, $scope, appEvent, APP_CONST) {
    var vm = this;
    vm.appTitle = APP_CONST.title;
    vm.appVersion = APP_CONST.version;
    vm.navs = appNav.navConfig;
    vm.gotoState = gotoState;

    /////////////////////////

    function gotoState(state){
      $state.go(state);
    }

  }
}
