angular.module('app')
       .config(routeProvider);
function routeProvider($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("moments");

  $stateProvider.
     state('moments', {
       url:'/moments',
       templateUrl: 'app/moments/moments.view.html',
       controller: 'momentsCtrl',
       controllerAs: 'vm'
     }).
     state('moments.specified', {
       url:'/month/:month',
       templateUrl: 'app/moments/moments.view.html',
       controller: 'momentsCtrl',
       controllerAs: 'vm'
     }).
     state('about', {
       url:'/about',
       templateUrl: 'app/about/about.html'
     });

}
