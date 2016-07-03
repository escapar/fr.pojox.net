angular.module('app.components')
       .directive('resize', resize)

function resize($window) {
  return function (scope, element) {
    var w = angular.element($window);
    var refreshWidth = function() {
      scope.winWidth = w.width();
   //   element.css('height', (w.height() -20) + 'px' );
    };
    w.bind('resize', function () {
      refreshWidth();   // when window size gets changed
    });
    refreshWidth();     // when page loads
    element.css('height', (w.height() -20) + 'px' );
  }
}
