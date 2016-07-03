angular.module('app.modules')
       .controller('composeCtrl',composeCtrl);

function composeCtrl ($scope, $http, $state, $document, appEvent, composeService) {
  var vm = this;
  vm.submitBeat = submitBeat;
  vm.submitTopic = submitTopic;
  vm.newBeat = {
      // time: 0,  to be populated in backend
      text: "",
      featured : false,
      safe: true
  };

  vm.newTopic = {
    // time: 0,  to be populated in backend
    title:"Topic Title Here",
    content: "",
    featured : false
  };

  function submitBeat(){
    composeService.postBeat(vm.newBeat);
  }

  function submitTopic(){
    composeService.postTopic(vm.newTopic);
  }
}
