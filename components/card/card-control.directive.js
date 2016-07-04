angular.module('app.components')
       .directive('jcCardControl',jcCardControl);

function jcCardControl(){
  var directive = {
    controller: cardControlCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/card/card-control.tmpl.html',
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
    vm.feature = feature;

    ////////////////////////////////

    function deleteData(){
      $scope.cardCtrl.deleted = true;
      appEvent.publish('deleteData',vm.content._id);
    }
    function feature(){
      appEvent.publish('featureData',vm.content._id);
    }
  }
}
