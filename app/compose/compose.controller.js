angular.module('app.modules')
       .controller('composeCtrl',composeCtrl);

function composeCtrl ($scope, $http, $state, $document, appEvent,appService,topicsService) {
  var vm = this;
  vm.submitTopic = submitTopic;
  vm.upload = upload;
  vm.topicId = $state.params.id;

  vm.newTopic = {
    // time: 0,  to be populated in backend
    title:"Topic Title Here",
    content: "",
    featured : false
  };

  init();
  /////////

  function init(){
    if(vm.topicId){
      topicsService.fetchOne(vm.topicId).success(res=>vm.newTopic = res);
    }
  }

  function submitTopic(){
    topicsService.postTopic(vm.newTopic);
  }

  function upload($files, $event, $flow){
    appService.uploadImage($flow.files[0].file)
        .success(data=>vm.newTopic.content+=('![image](http://ww4.sinaimg.cn/large/'+data.pid+')'));
  }



}
