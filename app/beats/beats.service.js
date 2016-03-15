angular.module('app.modules')
       .service('beatsService',beatsService);

function beatsService ($http, $state, $document, APP_CONST) {
  var service = {
    fetchAll: fetchAll,
    fetchByMonth: fetchByMonth
  }
  return service;

  function fetchAll(){
    return $http.get(APP_CONST.api + 'v1/beats');
  }

  function fetchByMonth(yymm, duration){
    return $http.get(APP_CONST.api + 'beats/yymm/' + yymm + '/duration/' + duration);
  }

}
