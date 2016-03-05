angular.module('app.modules')
       .controller('composeCtrl',composeCtrl);

function composeCtrl ($scope, $http, $state, $document, appEvent) {
  var vm = this;
  vm.newBeat = {
      time: 0, // to be populated
      text: "",
      featured : false,
      safe: true
  };

  function generateTimestamp(){
    return Date.parse(new Date()) / 1000;
  }
}
