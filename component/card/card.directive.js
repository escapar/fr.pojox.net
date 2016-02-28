angular.module('app.components')
       .directive('jcCard',jcCard);

function jcCard(){
  var directive = {
    controller: cardCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card.tmpl.html',
    scope: {
      content: '=jcContent',
      dstShow: '@jcDstShow',
      utcCn: '@jcUtcCn'
    },
    bindToController: true
  };
  return directive;

  function cardCtrl() {
    var vm = this;
  }
}
