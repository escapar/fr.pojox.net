/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;

mod = angular.module('infinite-scroll', ['app']);

mod.directive('infiniteScroll', [
  '$rootScope', '$window', '$timeout','appEvent', function($rootScope, $window, $timeout, appEvent) {
    return {
      link: function(scope, elem, attrs) {
        var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
        $window = angular.element($window);
        scrollDistance = 0;
        if (attrs.infiniteScrollDistance != null) {
          scope.$watch(attrs.infiniteScrollDistance, function(value) {
            return scrollDistance = parseInt(value, 10);
          });
        }
        scrollEnabled = true;
        checkWhenEnabled = false;
        if (attrs.infiniteScrollDisabled != null) {
          scope.$watch(attrs.infiniteScrollDisabled, function(value) {
            scrollEnabled = !value;
            if (scrollEnabled && checkWhenEnabled) {
              checkWhenEnabled = false;
              return handler();
            }
          });
        }
        handler = function() {
          var elementBottom, remaining, shouldScroll, windowBottom;
          windowBottom = $window.height() + $window.scrollTop();
          elementBottom = elem.offset().top + elem.height();
          remaining = elementBottom - windowBottom;
          shouldScroll = remaining <= $window.height() * scrollDistance;
          if (shouldScroll && scrollEnabled) {
            scope.vm.loadMore();
          } else if (shouldScroll) {
            return checkWhenEnabled = true;
          }
        };
        appEvent.subscribe('jcSubNavSectionSwitched',function(){
          return handler();
        },scope);
        $window.on('scroll', handler);
        scope.$on('$destroy', function() {
          return $window.off('scroll', handler);
        });
      }
    };
  }
]);
