angular.module('app.modules')
       .controller('beatsCtrl',beatsCtrl);

function beatsCtrl ($scope, $http, $state, $document, appEvent, angularGridInstance, beatsService, composeService) {
  var vm = this;
  //Temporarily treat vm.dataSource as a local datasource
  vm.dataSource = [];
  vm.monthNeeded = ['1409','1410','1411','1412','1501','1502','1503','1504','1505','1506'];
  vm.tabs = [];
  vm.currentSelectedTab = {};
  vm.jcSubNavSettings = [
    {
      type: 'toggle',
      title: 'Featured Only',
      value: false,
      event: 'toggleFeatured'
    },

    {
      type: 'toggle',
      title: 'Hide Selfie',
      value: true,
      event: 'toggleWeired'
    }
  ];

  // TODO MODERATE: comment and tag function to add in further releases
  vm.getBeatOfMonth = getBeatOfMonth;
  vm.scrollTop = scrollTop;
  activate();
  ////////////////////////////////

  function scrollTop(){
    $document.scrollTop(0, 2000);
  }

  function outputData(){
    var output = [];
    output.beats=[];
    vm.dataSource.forEach(function(data){
      if(checkMonth(data.time)){
        output.push(data);
      };
    });
    var newWindow = window.open();
    newWindow.document.write('<pre>'+JSON.stringify(output,undefined, 4)+'</pre>');

    function checkMonth(time){
      for(var i = 0; i < vm.monthNeeded.length; i++){
        if(vm.monthNeeded[i].indexOf(time) >= 0) return true;
      }
      return false;
    }

  }

  function deleteData(event,time){
    var output = [];
    vm.dataSource.forEach(function(data){
        if(data.time === vm.currentSelectedMonth){
        for(var i = 0 ; i< data.beats.length; i++){
          if(data.beats[i].time === time){
            data.beats.splice(i,1);
            return;
          }
        }
      };
    });
  }

  function getBeatOfMonth(month){
    vm.currentSelectedMonth = month;
    vm.currentSelectedTab = getTabByMonth(month);
    return beatsService.fetchByMonth(month,1).success(function(res){
      vm.selectedBeats = res;
    });
  }

  function getTabByMonth(yearAndMonth){
    return {
      title: getNavDateLabel(yearAndMonth),
      state: 'beats.specified',
      stateParam : { month: yearAndMonth }
    }
  }

  function activate(){
    vm.tabs = generatejcSubNavTabs();
    getBeat();
  //  return $http.get('data/data.json').success(getDataSuccess);

    function generatejcSubNavTabs(){
      var tabs=[];
      vm.monthNeeded.forEach(function(yearAndMonth){
        tabs.push(
          {
            title: getNavDateLabel(yearAndMonth) ,
            state: 'beats.specified',
            stateParam : { month: yearAndMonth }
          }
        );
      });
      return tabs;
    }
  }

  function getBeat(){
    timeInUrl = vm.monthNeeded[0];
    if($state.params.month != null){
      timeInUrl = $state.params.month;
    }
    getBeatOfMonth(timeInUrl);
  }

  function switchMonth(event,tab){
    getBeatOfMonth(tab.stateParam.month);
  }

  function getNavDateLabel(yearAndMonth){
    var year = yearAndMonth.substring(0, 2);
    var month = yearAndMonth.substring(2, 4);
    return month+'/'+year;
  }


  /*function insertIntoDB(){
    $http.get('data/data.json').then(function(data){
        var dd = data.data;
        angular.forEach(dd,function(d){
            var beats = d.beats;
            angular.forEach(beats,function(b){
            b.time = new Date(b.time*1000);
            composeService.postBeat(b);
            });
        });
    })
  }*/

  ///////////////////
  appEvent.subscribe('jcSubNavSectionSwitched', switchMonth, $scope);
  appEvent.subscribe('outputData', outputData, $scope);
  appEvent.subscribe('deleteData', deleteData, $scope);



}
