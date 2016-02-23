angular.module('app')
       .provider('appNav',appNavProvider);

function appNavProvider(){
  var navConfig = [];
  this.$get = function(){
    return {
      addMenu : addMenu,
      navConfig : navConfig
    };
  };

  //////////////////

  function addMenu(menus){
    angular.forEach(menus, function(menu){
      pushMenu(menu);
    });
  }

  function pushMenu(nav){
    navConfig.push(nav);
  }
}
