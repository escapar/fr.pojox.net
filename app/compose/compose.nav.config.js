angular.module('app')
       .config(navConfig);

function navConfig(jcNavProvider){
  jcNavProvider.$get().addMenu(
    [
      {title : 'Compose', state : 'compose', order : 1}
    ]
  );

}
