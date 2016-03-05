angular.module('app.components')
       .directive('jcCardContent',jcCardContent);

function jcCardContent(angularGridInstance){
  var directive = {
    controller: cardContentCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-content.tmpl.html',
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

    function getTimeMessage(timestamp){
      var timeMessage = $filter('date')(timestamp*1000, 'dd/MM/yy HH:mm', checkAndOutputUTC(timestamp));
      if(vm.showDst){
        timeMessage += checkAndOutputUTC(timestamp) === '+0100' ? ' Winter Time' : ' Summer Time';;
      } else if(vm.utcCn){
        timeMessage += ' CST';
      }
      return timeMessage;
    }

    function checkAndOutputUTC(timestamp){
      //We've got summertime for French guys
      if(angular.isUndefined(timestamp)) return;
      if(timestamp > 1427587200 && timestamp < 1445731200 || timestamp > 1396137600 && timestamp < 1414281600){
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
