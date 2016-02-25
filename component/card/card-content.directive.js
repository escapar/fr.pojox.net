angular.module('app.components')
       .directive('cardContent',cardContent);

function cardContent(angularGridInstance){
  var directive = {
    controller: cardContentCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-content.tmpl.html',
    require: '^^card',
    compile: compileRefresh,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, cardCtrl){
    scope.cardCtrl = cardCtrl;
    scope.vm.content = cardCtrl.content;
    scope.vm.dstShow = cardCtrl.dstShow;
  }

  function cardContentCtrl($scope, $filter) {
    var vm = this;
    var unset = $scope.$watch('vm.content.time',handleTime);
    vm.checkAndOutputUTC = checkAndOutputUTC;
    ///////////////////////////

    function handleTime(timestamp,a){
      $scope.timeMessage = getTimeMessage(timestamp);
      unset();
    }

    function getTimeMessage(timestamp){
      var timeMessage = $filter('date')(vm.content.time, 'dd/MM/yy HH:mm', checkAndOutputUTC(timestamp));
      if(vm.dstShow){
        var dstMessage = checkAndOutputUTC(timestamp) === '+0100' ? ' Winter Time' : ' Summer Time';
        timeMessage += dstMessage;
      }
      return timeMessage;
    }

    function checkAndOutputUTC(timestamp){
      //We've got summertime for French guys
      if(angular.isUndefined(timestamp)) return;
      if(timestamp > 1427587200 && timestamp < 1445731200 || timestamp >1396137600 && timestamp < 1414281600){
        return '+0200';
      }else{
        return '+0100';
      }
    }
  }

  function compileRefresh(element, attrs){
    if(!angular.isUndefined(angularGridInstance) && !angular.isUndefined(angularGridInstance.cards)){
      angularGridInstance.cards.refresh();
    }
    return {
      post: postLink
    }
  }
}
