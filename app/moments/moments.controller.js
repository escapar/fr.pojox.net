angular.module('app.modules')
       .controller('momentsCtrl',momentsCtrl);

function momentsCtrl ($scope, $http, $state, $document, appEvent, angularGridInstance) {
  var vm = this;
  //Temporarily treat vm.dataz as a local datasource
  vm.dataz = [];
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
  vm.displayMonth = displayMonth;
  vm.scrollTop = scrollTop;
  activate();
  ////////////////////////////////

  function scrollTop(){
    $document.scrollTop(0, 2000);
  }


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

    function checkMonth(time){
      for(var i = 0; i < vm.monthNeeded.length; i++){
        if(vm.monthNeeded[i].indexOf(time) >= 0) return true;
      }
      return false;
    }

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
        vm.selectedMonth = [];
        vm.selectedMonth = vm.dataz[i];
        vm.currentSelectedMonth = month;
        vm.currentSelectedTab = getTabByMonth(month);
        return;
      }
    }

    function getTabByMonth(yearAndMonth){
      return {
        title: getNavDateLabel(yearAndMonth),
        state: 'moments.specified',
        stateParam : { month: yearAndMonth }
      }
    }
  }

  function activate(){
    vm.tabs = generatejcSubNavTabs();
    return $http.get('data/data.json').success(getDataSuccess);

    function generatejcSubNavTabs(){
      var tabs=[];
      vm.monthNeeded.forEach(function(yearAndMonth){
        tabs.push(
          {
            title: getNavDateLabel(yearAndMonth) ,
            state: 'moments.specified',
            stateParam : { month: yearAndMonth }
          }
        );
      });
      return tabs;
    }
  }

  function getDataSuccess(data){
    vm.dataz = data;
    timeInUrl = vm.monthNeeded[0];

    if($state.params.month != null){
      timeInUrl = $state.params.month;
    }
    displayMonth(timeInUrl);
  }

  function switchMonth(event,tab){
    displayMonth(tab.stateParam.month);
  }

  function getNavDateLabel(yearAndMonth){
    var year = yearAndMonth.substring(0, 2);
    var month = yearAndMonth.substring(2, 4);
    return month+'/'+year;
  }

  ///////////////////
  appEvent.subscribe('jcSubNavSectionSwitched', switchMonth, $scope);
  appEvent.subscribe('outputData', outputData, $scope);
  appEvent.subscribe('deleteData', deleteData, $scope);

}
