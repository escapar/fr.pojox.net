angular.module('app')
    .config(navConfig);

function navConfig(jcNavProvider){
    jcNavProvider.$get().addMenu(
        [
            {title : 'Login', state : 'login', order : 4}
        ]
    );

}
