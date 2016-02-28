angular.module('app')
       .config(navConfig);

function navConfig(jcNavProvider){
  jcNavProvider.$get().addMenu(
    [
      {title : 'About', state : 'about', order : 1}
    ]
  );

}
