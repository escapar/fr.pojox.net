angular.module('app')
    .service('appService',appService);

function appService(jwtHelper,$http) {
    var service = {
        uploadImage : uploadImage,
        isAdmin : isAdmin
    };
    return service;

    function uploadImage(img){
        return $http.post('http://x.mouto.org/wb/x.php?up',img);
    }
    
    function isAdmin(){
        if(localStorage.getItem('juicy_token')) {
            var payload = jwtHelper.decodeToken(localStorage.getItem('juicy_token'));
            if(payload) {
                return payload.isAdmin;
            }
        }
        return false;
    }
}