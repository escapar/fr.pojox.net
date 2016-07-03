angular.module('app.modules')
       .service('composeService',composeService);

function composeService ($http, $state, $document, APP_CONST) {
  var service = {
    postBeat : postBeat,
    postTopic : postTopic
  }
  return service;

  function postBeat(beat){
    return $http.post(APP_CONST.api + 'v1/beats',beat);
  }

  function postTopic(topic){
    return $http.post(APP_CONST.api + 'v1/topics',topic);
  }
}
