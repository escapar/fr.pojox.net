angular.module('app')
       .config(navConfig);

function navConfig(jcNavProvider){
  jcNavProvider.$get().addMenu(
    [
      {title : 'Logs', state : 'about', order : 3}
    ]
  );

}
