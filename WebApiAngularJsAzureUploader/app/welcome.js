(function () {
    'use strict';

    angular
        .module('app')
        .controller('welcome', welcome);

    welcome.$inject = ['$location']; 

    function welcome($location) {
        var vm = this;
        
        activate();

        function activate() { }
    }
})();
