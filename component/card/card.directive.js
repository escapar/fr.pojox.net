angular.module('app.components')
       .directive('card',card);

function card(){
  var directive = {
    controller: cardCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card.tmpl.html',
    scope: {
      content: '=',
      dstShow: '@'
    },
    bindToController: true
  };
  return directive;

  function cardCtrl() {
    var vm = this;
  }
}
