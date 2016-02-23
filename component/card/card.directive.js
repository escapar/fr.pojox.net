angular.module('app.components')
       .directive('card',card);

function card(){
  var directive = {
    controller: cardCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card.tmpl.html',
    link: postLink,
    scope: {
      moment: '=',
      idx: '='
    },
    require: '^^cards',
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, cardsCtrl){
    scope.vm.cardsCtrl = cardsCtrl;
  }

  function cardCtrl() {
    var vm = this;
  }
}
