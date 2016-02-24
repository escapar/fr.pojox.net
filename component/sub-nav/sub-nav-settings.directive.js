angular.module('app.components')
       .directive('subNavSettings',subNavSettings);

function subNavSettings(){
  var directive = {
    controller: subNavSettingsCtrl,
    controllerAs: 'vm',
    require:'^subNav',
    link: postLink,
    templateUrl: 'component/sub-nav/sub-nav-settings.tmpl.html',
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, subNavCtrl){
    scope.vm.subNavCtrl = subNavCtrl;
    scope.vm.settings = subNavCtrl.settings;
  }

  function subNavSettingsCtrl(appEvent) {
    var vm = this;
    vm.handleSettings = handleSettings;
    
    ///////////////////////////

    function handleSettings(setting){
      appEvent.publish(setting.event,setting.value)
    }
  }
}
