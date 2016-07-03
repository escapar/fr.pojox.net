angular.module('app')
  .config(httpConfig);

function httpConfig($httpProvider,jwtInterceptorProvider) {
    //Reset headers to avoid OPTIONS request (aka preflight)
    $httpProvider.defaults.headers.common ={
        'Accept': 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
    };
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $httpProvider.interceptors.push('jwtInterceptor');
    jwtInterceptorProvider.tokenGetter = tokenGetter;

    function tokenGetter(){
        return localStorage.getItem('juicy_token');
    }
}
