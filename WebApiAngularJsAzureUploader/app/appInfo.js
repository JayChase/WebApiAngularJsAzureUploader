(function () {
    'use strict';

    angular
        .module('app')
        .factory('appInfo', appInfo);    

    function appInfo() {
        var service = {
            busy: false,
            message: '',
            setInfo: setInfo
        };

        return service;

        function setInfo(args) {
            if (args) {
                if (args.busy) {
                    service.busy = args.busy;
                }
                if (args.message) {
                    service.message = args.message;
                }
            } else {
                service.busy = false;
                service.message = '';
            }
        }
    }
})();