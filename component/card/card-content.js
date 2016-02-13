angular.module('app.components')
       .directive('cardContent',cardContent);

function cardContent(angularGridInstance){
  var directive = {
    controller: cardContentCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-content.tmpl.html',
    scope: {
      moment: '='
    },
    compile:compileRefresh,
    bindToController: true
  };
  return directive;

  function cardContentCtrl() {
    var vm = this;
    vm.checkAndOutputUTC = checkAndOutputUTC;

    ///////////////////////////

    function checkAndOutputUTC(){
      if(vm.moment.time > 1425164400 && vm.moment.time < 1445727600 || vm.moment.time >1393628400 && vm.moment.time < 1414278000){
        return '+0200';
      }else{
        return '+0100';
      }
    }
  }

  function compileRefresh(){
    angularGridInstance.gallery.refresh();
  }
}
