angular.module('app.modules')
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
        var payload = jwtHelper.decodeToken(localStorage.getItem('juicy_token'));
        return payload.isAdmin;
    }
}