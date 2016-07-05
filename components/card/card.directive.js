angular.module('app.components')
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

  function cardCtrl(APP_CONST,jwtHelper) {
    var vm = this;
    var payload = jwtHelper.decodeToken(localStorage.getItem('juicy_token'));
    vm.deleted = false;
    vm.prod = APP_CONST.production;
    vm.isAdmin = payload.isAdmin;
    
  }
}
