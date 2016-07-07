angular.module('app')
       .config(navConfig);

function navConfig(jcNavProvider,appServiceProvider){
    if(appServiceProvider.$get().isAdmin()) {
        jcNavProvider.$get().addMenu(
            [
                {title: 'Compose', state: 'compose', order: 1}
            ]
        );
    }
}
