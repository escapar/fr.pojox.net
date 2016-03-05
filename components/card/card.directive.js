angular.module('app.componentss')
       .directive('jcCard',jcCard);

function jcCard(){
  var directive = {
    controller: cardCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/card/card.tmpl.html',
    scope: {
      content: '=jcContent',
      showDst: '@jcShowDst',
      utcCn: '@jcShowUtcCn',
      hideProgress: '@jcHideProgress'
    },
    bindToController: true
  };
  return directive;

  function cardCtrl(APP_CONST) {
    var vm = this;
    vm.prod = APP_CONST.production;

  }
}
