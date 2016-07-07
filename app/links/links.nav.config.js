angular.module('app')
    .config(navConfig);


function navConfig(jcNavProvider,appServiceProvider){
    if(appServiceProvider.$get().isAdmin()) {
        jcNavProvider.$get().addMenu(
            [
                {title: 'Idols!', state: 'links', order: 8}
            ]
        );
    }
}
