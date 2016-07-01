angular.module('app.modules')
    .service('loginService',loginService);

function loginService ($http, $state, $document, APP_CONST) {
    var service = {
        login : login,
        reg : reg
    }
    return service;

    function login(userLogin){
        return $http.post(APP_CONST.api + 'user/login',userLogin);
    }

    function reg(userLogin){
        return $http.post(APP_CONST.api + 'user/reg',userLogin);
    }
}
