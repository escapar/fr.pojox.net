angular.module('app.modules')
       .service('beatsService',beatsService);

function beatsService ($http, $state, $document, APP_CONST) {
  var service = {
    fetchBeats: fetchBeats,
    fetchBeatsByMonth: fetchBeatsByMonth
  }
  return service;

  function fetchBeats(){
    return $http.get(APP_CONST.api + 'v1/beats');
  }

  function fetchBeatsByMonth(yymm, duration){
    return $http.get(APP_CONST.api + 'yymm/' + yymm + '/duration/' + duration);
  }

}
