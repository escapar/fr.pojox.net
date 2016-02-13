angular.module('app.modules')
       .controller('momentsCtrl',momentsCtrl);

function momentsCtrl ($scope,$http,$state) {
  var vm = this;
  vm.selectedMonth = [];
  vm.monthNeeded = ['1409','1410','1411','1412','1501','1502','1503','1504','1505','1506'];
  vm.displayMonth = displayMonth;

  // TODO: function to add in next releases
  vm.addComment = addComment;
  vm.addTag = addTag;
  //Everything is in vm.dataz
  vm.dataz = [];

  activate();
  ////////////////////////////////

  function displayMonth(month){
    for(var i = 0; i < vm.dataz.length; i++){
      if(vm.dataz[i].time === month){
        vm.selectedMonth = vm.dataz[i];
        return;
      }
    }
  }

  function activate(){
    return $http.get('data/data.json').success(getDataSuccess);
  }

  function getDataSuccess(data){
    vm.dataz = data;
    timeInUrl = vm.monthNeeded[0];

    // TODO: Check why it is not possible to use $stateParams.month
    if($state.params.month != null){
      timeInUrl = $state.params.month;
    }
    displayMonth(timeInUrl);
  }

  function checkMonth(time){
    for(var i = 0; i < vm.monthNeeded.length; i++){
      if(vm.monthNeeded[i].indexOf(time) >= 0) return true;
    }
    return false;
  }

  function addComment(data,id,comment){
    data[id].comment = comment;
  }

  function addTag(data,id,tagId){
    if(data[id].tag == null){
      data[id].tag = [];
    }
    data[id].tag.push(tagId);
  }


  function switchMonth(event,month){
    displayMonth(month);
  }

  ///////////////////
  $scope.$on('monthSwitched',switchMonth);
}
