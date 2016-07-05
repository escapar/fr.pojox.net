angular.module('app.modules')
  .controller('topicsCtrl',topicsCtrl);

function topicsCtrl ($scope, $http, $state, $document, appEvent, topicsService) {
  var vm = this;
  vm.topicList = [];
  vm.start = 0;
  vm.reachedEnd = false;
  vm.lock = false;
  vm.loadMore = loadMore;
  vm.pageForCustomRefresh = 0;
  var paginationInit = true;
  var paginationInitBeatsNum = 3;
  var beatsPerPage = 3;
 // init();

  /////////

  function loadMore(){
    pushBeatsPaginated();

  }

  function pushBeatsPaginated(){
    var skipCount = vm.pageForCustomRefresh * beatsPerPage;
    if(paginationInit){
      beatsPerPage = paginationInitBeatsNum;
    }
    if(!vm.lock) {
      vm.lock = true;
      topicsService.fetchBySkipAndLimit(skipCount, beatsPerPage).success(res=> {
        if(res && res.length) {
          angular.forEach(res, r => {
                r.init　=　paginationInit;
                if(!vm.topicList){
                  vm.topicList = [];
                }
                vm.topicList.push(r);
              }
          );
          vm.pageForCustomRefresh++;
          vm.lock = false;
        }else{
          vm.lock = true;
        }
        paginationInit = false;
      })
    }
  }

  function handleTopicSelected(event,id){
    $state.go("topics-detail",id);
  }

  function handleEditTopic(event,id){
    $state.go("compose-edit",id);
  }

  appEvent.subscribe("topicSelected",handleTopicSelected,$scope);
  appEvent.subscribe("editTopic",handleEditTopic,$scope);

}
