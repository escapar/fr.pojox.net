angular.module('app.modules')
       .controller('aboutCtrl',aboutCtrl);

function aboutCtrl () {
  var vm = this;
  vm.aboutData = [
    {
      "title": 'Libs',
      "time": 1418225110,
      "text": "AngularJS Modified Angular-materialize(including Materialize) \n Modified Angular-grid ",
      "featured": true,
      "safe": true
    },

    {
      "time": 1418300718,
      "text": "222",
      "featured": true,
      "safe": true
    },

    {
      "time": 1418372716,
      "text": "333",
      "featured": false,
      "safe": true
    }

  ];

}
