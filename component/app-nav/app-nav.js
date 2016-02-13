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

  function appNavCtrl($scope) {
    var vm = this;
    vm.gotoState = gotoState;
    vm.toggleSettings = toggleSettings;
    function gotoState(state){
      $state.go(state);
    }

    function toggleSettings(){
      $scope.$broadcast('toggleSettings');
    }
  }
}
