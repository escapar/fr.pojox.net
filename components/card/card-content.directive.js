angular.module('app.components')
       .directive('jcCardContent',jcCardContent);

function jcCardContent(angularGridInstance){
  var directive = {
    controller: cardContentCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/card/card-content.tmpl.html',
    scope: {},
    require: '^^jcCard',
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, cardCtrl){
    scope.vm.content = cardCtrl.content;
    scope.vm.showDst = cardCtrl.showDst;
    scope.vm.utcCn = cardCtrl.utcCn;
    scope.vm.isAdmin = cardCtrl.isAdmin;
    scope.vm.hideProgress = cardCtrl.hideProgress;
    scope.vm.refreshInit();
  }

  function cardContentCtrl($scope, $filter) {
    var vm = this;
    vm.timeMessage = '';
    vm.refreshInit = refreshInit;
    ///////////////////////////

    function refreshInit(){
      if(!angular.isUndefined(angularGridInstance) && !angular.isUndefined(angularGridInstance.cards)　&&　vm.content.init){
        angularGridInstance.cards.refresh();
      }
    }

    function getTimeMessage(date){
      var timeMessage = $filter('date')(new Date(date), 'yyyy-MM-dd hh:mm:ss', checkAndOutputUTC(date));
      if(vm.showDst){
        timeMessage += checkAndOutputUTC(date) === '+0100' ? ' Winter Time' : ' Summer Time';;
      }

      return timeMessage;
    }

    function checkAndOutputUTC(date){
      //We've got summertime for French guys
      if(angular.isUndefined(date)) return;
      date = new Date(date);
      if(date > new Date(1427587200000) && date < new Date(1445731200000) || date > new Date(1396137600000) && date < new Date(1414281600000)){
        return '+0200';
      }else if(vm.utcCn){
        return '+0800';
      }else{
        return '+0100';
      }
    }

    var unset = $scope.$watch('vm.content.time',function handleTime(timestamp){
      vm.timeMessage = getTimeMessage(timestamp);
      unset();
    });
  }
}
