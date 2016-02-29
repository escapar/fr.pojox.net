angular.module('app.components')
       .directive('jcCardControl',jcCardControl);

function jcCardControl(){
  var directive = {
    controller: cardControlCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-control.tmpl.html',
    require: '^^jcCard',
    scope: {},
    link: postLink,
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, cardCtrl){
    scope.cardCtrl = cardCtrl;
    scope.vm.content = cardCtrl.content;
  }

  function cardControlCtrl($scope,appEvent) {
    var vm = this;
    vm.deleteData = deleteData;
    vm.outputData = outputData;
    vm.feature = feature;
    vm.weired = weired;

    ////////////////////////////////

    function deleteData(){
      appEvent.publish('deleteData',vm.content.time);
    }
    function outputData(){
      appEvent.publish('outputData');
    }
    function feature(){
      $scope.cardCtrl.content.featured = true;
    }
    function weired(){
      $scope.cardCtrl.content.safe = false;
    }
  }
}
