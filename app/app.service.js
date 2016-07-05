angular.module('app.modules')
    .service('appService',appService);

function appService() {
    var service = {
        uploadImage : uploadImage
    };
    return service;

    function uploadImage(){
        return $http.post('http://x.mouto.org/wb/x.php?up',img);
    }
}