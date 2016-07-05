angular.module('app.components')
  .directive('jcTopicCard',jcTopicCard);
  function jcTopicCard(){
    var directive = {
      controller: TopicCardCtrl,
      controllerAs: 'vm',
      scope: {
        jcTopic: '=',
        jcTopicBrief: '=',
        jcTopicShare: '=',
        jcShadowDisabled: '='
      },
      templateUrl: 'components/topic-card/topic-card.view.html',
      bindToController: true
    };
    return directive;

    ////////

    function TopicCardCtrl($scope,$showdown,$location,appService,appEvent){
      var vm = this;
      vm.selectTopic = selectTopic;
      vm.share = share;
      vm.editTopic = editTopic;
      vm.isAdmin = appService.isAdmin();

      init();

      ////////
      function init(){

        if(vm.jcTopic !== undefined){
          if(!vm.jcTopicBrief){
            vm.jcTopic.html = $showdown.makeHtml(vm.jcTopic.content);
          }
        }
      }

      function selectTopic(id){
        appEvent.publish('topicSelected',{id : id});
      }

      function editTopic(id){
        appEvent.publish('editTopic',{id : id});
      }

      function share(){
        vm.nowUrl = 'https://src.moe/#'+$location.url();
          (function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=$scope.nowUrl,p=['url=',e(u),'&title=',e(vm.jcTopic.title),'&pic=',e(vm.jcTopic.thumbnail)].join('');
            function a() {
              if (!window.open([f, p].join(''), 'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join('')))u.href = [f, p].join('');
            }
            if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
      }


      $scope.$watch('vm.jcTopic', function () {
        // Recerive new monthly Data
        if(vm.jcTopic){
          init();
        }
      },true);

    }

  }
