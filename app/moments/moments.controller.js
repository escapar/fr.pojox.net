angular.module('app.modules')
       .controller('momentsCtrl',momentsCtrl);

function momentsCtrl ($scope, $http, $state, appEvent) {
  var vm = this;
  vm.selectedMonth = [];
  vm.monthNeeded = ['1409','1410','1411','1412'];
  vm.displayMonth = displayMonth;
  vm.currentSelectedMonth = {} ;
  // TODO: function to add in next releases
  vm.addComment = addComment;
  vm.addTag = addTag;
  //Everything is in vm.dataz
  vm.dataz = [];

  activate();
  ////////////////////////////////

  function outputData(){
    var output = [];
    output.moments=[];
    vm.dataz.forEach(function(data){
      if(checkMonth(data.time)){
        output.push(data);
      };
    });
    var newWindow = window.open();
    newWindow.document.write('<pre>'+JSON.stringify(output,undefined, 4)+'</pre>');
  }

  function deleteData(event,time){
    var output = [];
    vm.dataz.forEach(function(data){
        if(data.time === vm.currentSelectedMonth){
        for(var i = 0 ; i< data.moments.length; i++){
          if(data.moments[i].time === time){
            data.moments.splice(i,1);
            return;
          }
        }
      };
    });
  }

  function displayMonth(month){
    for(var i = 0; i < vm.dataz.length; i++){
      if(vm.dataz[i].time === month){
        vm.selectedMonth = vm.dataz[i];
        vm.currentSelectedMonth = month;
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
  appEvent.subscribe('monthSwitched', switchMonth, $scope);
  appEvent.subscribe('outputData', outputData, $scope);
  appEvent.subscribe('deleteData', deleteData, $scope);

}
