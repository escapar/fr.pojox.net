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
     state('compose-edit', {
       url:'/compose/:id',
       templateUrl: 'app/compose/compose.view.html',
       controller: 'composeCtrl',
       controllerAs: 'vm'
     }).
     state('login', {
       url:'/login',
       templateUrl: 'app/login/login.view.html',
       controller: 'loginCtrl',
       controllerAs: 'vm'
     }).
     state('analysis', {
       url:'/analysis',
       templateUrl: 'app/analysis/analysis.view.html',
       controller: 'analysisCtrl',
       controllerAs: 'vm'
     }).
     state('topics', {
       url:'/topics',
       templateUrl: 'app/topics/topics.view.html',
       controller: 'topicsCtrl',
       controllerAs: 'vm'
     }).
     state('links', {
       url:'/links',
       templateUrl: 'app/links/links.view.html',
       controller: 'linksCtrl',
       controllerAs: 'vm'
     }).
     state('topics-detail', {
       url:'/topics/:id',
       templateUrl: 'app/topics/topics-detail.view.html',
       controller: 'topicsDetailCtrl',
       controllerAs: 'vm'
     });

}
