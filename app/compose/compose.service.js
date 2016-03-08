angular.module('app.modules')
       .service('composeService',composeService);

function composeService ($http, $state, $document, APP_CONST) {
  var service = {
    postBeat : postBeat
  }
  return service;

  function postBeat(beat){
    return $http.post(APP_CONST.api + 'beats',beat);
  }
}
