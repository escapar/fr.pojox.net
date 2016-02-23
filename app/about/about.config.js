angular.module('app')
       .config(navConfig);

function navConfig(appNavProvider){
  var appNav = appNavProvider.$get();
  appNav.addMenu(
    [
      {title : 'About', state : 'about'}
    ]
  );

}
