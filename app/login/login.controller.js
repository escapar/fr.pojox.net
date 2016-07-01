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
        loginService.login(vm.userLogin).then(res=>{
            console.log(res);
            if(res == null){
            loginService.reg(vm.userLogin);
        }});
    }
}
