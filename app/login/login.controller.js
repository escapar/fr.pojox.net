angular.module('app.modules')
    .controller('loginCtrl',loginCtrl);

function loginCtrl ($scope, $http, $state, $document, appEvent, loginService) {
    var vm = this;
    vm.loginOrReg = loginOrReg;
    vm.userLogin = {
        username:"",
        password:""
    };

    function loginOrReg(){
        loginService.login(vm.userLogin).success(token=>localStorage.setItem('juicy_token', token)).error(res=>
            loginService.reg(vm.userLogin).success(token=>localStorage.setItem('juicy_token', token))
        )
    }
}
