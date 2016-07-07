angular.module('app.modules')
    .service('linksService',linksService);

function linksService ($http, $state, $document, APP_CONST) {
    var service = {
        fetchAll: fetchAll,
        fetchBySkipAndLimit : fetchBySkipAndLimit,
        deleteOne : deleteOne,
        postLink : postLink
    };
    
    return service;

    function fetchAll(){
        return $http.get(APP_CONST.api + 'v1/links');
    }

    function deleteOne(id){
        return $http.delete(APP_CONST.api + 'v1/links/' + id);
    }

    function fetchBySkipAndLimit(skip ,limit){
        return $http.get(APP_CONST.api + 'v1/links?sort=-time&skip=' + skip + '&limit=' + limit);
    }
    function postLink(link){
        if(!link._id) {
            return $http.post(APP_CONST.api + 'v1/links', link);
        }else{
            return $http.patch(APP_CONST.api + 'v1/links/'+link._id, link);
        }
    }


}
