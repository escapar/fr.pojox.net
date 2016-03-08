angular.module('app.modules')
       .service('beatsService',beatsService);

function beatsService ($http, $state, $document, APP_CONST) {
  var service = {
    fetchBeats : fetchBeats
  }
  return service;

  function fetchBeats(){
    return $http.get(APP_CONST.api + 'beats');
  }
}
