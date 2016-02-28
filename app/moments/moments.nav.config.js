angular.module('app')
       .config(navConfig);

function navConfig(jcNavProvider){
  jcNavProvider.$get().addMenu(
    [
      {title : 'Moments', state : 'moments', order : 2}
    ]
  );
}
