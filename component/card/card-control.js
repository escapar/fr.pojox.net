angular.module('app.components')
       .directive('cardControl',cardControl);

function cardControl(){
  var directive = {
    controller: cardControlCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card-control.tmpl.html',
    scope: {
      index : '='
    },
    bindToController: true
  };
  return directive;

  function cardControlCtrl($scope) {
    var vm = this;
    vm.deleteData = deleteData;
    vm.outputData = outputData;
    vm.feature = feature;
    vm.weired = weired;
    
    ////////////////////////////////

    function deleteData(){
      $scope.$parent.$parent.vm.moments.splice(vm.index,1);
    }

    function outputData(){
      console.log($scope);
      console.log(JSON.stringify($scope.$parent.$parent.$parent.$parent.$parent.vm.dataz,undefined, 4));
    }

    function feature(){
      $scope.$parent.vm.moment.featured = true;
    }

    function weired(){
      $scope.$parent.vm.moment.safe = false;
      console.log($scope.$parent.vm.moment);
    }

  }



}
