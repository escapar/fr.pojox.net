angular.module('app.components')
       .directive('cardControl',cardControl);

function cardControl(){
  var directive = {
    controller: cardControlCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-control.tmpl.html',
    require: '^^card',
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, cardCtrl){
    scope.cardCtrl = cardCtrl;
    scope.vm.moment = cardCtrl.moment;
    scope.vm.idx = cardCtrl.idx;
  }

  function cardControlCtrl($scope,appEvent) {
    var vm = this;
    vm.deleteData = deleteData;
    vm.outputData = outputData;
    vm.feature = feature;
    vm.weired = weired;

    ////////////////////////////////

    function deleteData(){
      appEvent.publish('deleteData',vm.moment.time);
    }
    function outputData(){
      appEvent.publish('outputData');
    }
    function feature(){
      $scope.cardCtrl.moment.featured = true;
    }
    function weired(){
      $scope.cardCtrl.moment.safe = false;
    }
  }
}
