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
    vm.deleteBeats = deleteBeats;
    vm.modifyBeats = modifyBeats;

    ////////////////////////////////

    function deleteBeats(){
      $scope.cardCtrl.deleted = true;
      appEvent.publish('deleteBeats',vm.content._id);
    }
    function modifyBeats(){
      appEvent.publish('modifyBeats',vm.content);
    }
  }
}
