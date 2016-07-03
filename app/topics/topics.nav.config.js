angular.module('app')
  .config(navConfig);

function navConfig(jcNavProvider){
  jcNavProvider.$get().addMenu(
    [
      {title : 'Topics', state : 'topics', order : 5}
    ]
  );

}
