angular.module('app.modules')
       .directive('resize', resize)

// Copied From StackOverflow

function resize($window) {
    return function (scope, element) {
        var w = angular.element($window);
        var changeHeight = function() {element.css('height', (w.height() -20) + 'px' );};
            w.bind('resize', function () {
              changeHeight();   // when window size gets changed
        });
        changeHeight(); // when page loads
    }
}
