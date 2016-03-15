angular.module('app.componentss')
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
    scope.vm.hideProgress = cardCtrl.hideProgress;
  }

  function cardContentCtrl($scope, $filter) {
    var vm = this;
    vm.timeMessage = '';
    vm.refreshInit = refreshInit;
    ///////////////////////////

    function refreshInit(){
      if(!angular.isUndefined(angularGridInstance) && !angular.isUndefined(angularGridInstance.cards)){
        angularGridInstance.cards.refresh();
      }
    }

    function getTimeMessage(date){
      var timeMessage = $filter('date')(new Date(date), 'dd/MM/yy HH:mm', checkAndOutputUTC(date));
      if(vm.showDst){
        timeMessage += checkAndOutputUTC(date) === '+0100' ? ' Winter Time' : ' Summer Time';;
      } else if(vm.utcCn){
        timeMessage += ' CST';
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
