angular.module('app.components')
  .directive('jcTopicList',jcTopicList);
  function jcTopicList(){
    var directive = {
      controller: TopicListCtrl,
      controllerAs: 'vm',
      scope: {
        jcTopics: '=',
        jcTopicsInfo: '='
      },
      templateUrl: 'components/topic-list/topic-list.view.html',
      bindToController: true
    };
    return directive;

    ////////

    function TopicListCtrl(){
      var vm = this;
    }

  }
