angular.module('app')
       .config(routeProvider);
function routeProvider($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("beats");

  $stateProvider.
     state('beats', {
       url:'/beats',
       templateUrl: 'app/beats/beats.view.html',
       controller: 'beatsCtrl',
       controllerAs: 'vm'
     }).
     state('beats.specified', {
       url:'/month/:month',
       templateUrl: 'app/beats/beats.view.html',
       controller: 'beatsCtrl',
       controllerAs: 'vm'
     }).
     state('about', {
       url:'/about',
       templateUrl: 'app/about/about.view.html',
       controller: 'aboutCtrl',
       controllerAs: 'vm'
     }).
     state('compose', {
       url:'/compose',
       templateUrl: 'app/compose/compose.view.html',
       controller: 'composeCtrl',
       controllerAs: 'vm'
     }).
     state('analysis', {
       url:'/analysis',
       templateUrl: 'app/analysis/analysis.view.html',
       controller: 'analysisCtrl',
       controllerAs: 'vm'
     });

}
