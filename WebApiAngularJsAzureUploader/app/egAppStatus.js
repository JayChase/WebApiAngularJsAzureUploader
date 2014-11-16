(function() {
    'use strict';

    angular
        .module('app')
        .directive('egAppStatus', egAppStatus);

    egAppStatus.$inject = ['appInfo'];
    
    function egAppStatus(appInfo) { 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/egAppStatus.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.busy = appInfo.busy;

            scope.$watch(function () {
                return appInfo.message;
            },
            function (newMsg) {
                scope.message = newMsg;
            });
            scope.message = appInfo.message;
        }
    }

})();