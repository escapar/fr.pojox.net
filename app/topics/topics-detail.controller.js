angular.module('app.modules')
  .controller('topicsDetailCtrl',topicsDetailCtrl);

function topicsDetailCtrl ($scope, $http, $state, $document, appEvent, topicsService) {
  var vm = this;
  vm.topicData={};
  vm.topicId = $state.params.id;

  init();

  /////////

  function init(){
    if(!vm.topicId){
      $state.go("beats");
    }
    topicsService.fetchOne(vm.topicId).success(res=>vm.topicData = res);
  }
}
