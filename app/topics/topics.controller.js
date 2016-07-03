angular.module('app.modules')
  .controller('topicsCtrl',topicsCtrl);

function topicsCtrl ($scope, $http, $state, $document, appEvent, topicsService) {
  var vm = this;
  vm.topicList = [];
  init();

  /////////

  function init(){
    topicsService.fetchBySkipAndLimit(0,10).success(res=>vm.topicList = res);
  }

  function handleTopicSelected(event,id){
    $state.go("topics-detail",id);
  }

  $scope.$on("topicSelected",handleTopicSelected);
}
