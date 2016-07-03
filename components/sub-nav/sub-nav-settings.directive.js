angular.module('app.components')
       .directive('jcSubNavSettings',jcSubNavSettings);

function jcSubNavSettings(){
  var directive = {
    controller: subNavSettingsCtrl,
    controllerAs: 'vm',
    require:'^jcSubNav',
    link: postLink,
    templateUrl: 'components/sub-nav/sub-nav-settings.tmpl.html',
    bindToController: true
  };
  return directive;

  function postLink(scope, element, attrs, subNavCtrl){
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
