angular.module('app.modules')
       .controller('composeCtrl',composeCtrl);

function composeCtrl ($scope, $http, $state, $document, appEvent, composeService) {
  var vm = this;
  vm.submitBeat = submitBeat;
  vm.newBeat = {
      // time: 0,  to be populated in backend
      text: "",
      featured : false,
      safe: true
  };

  function submitBeat(){
    composeService.postBeat(vm.newBeat);
  }
}
