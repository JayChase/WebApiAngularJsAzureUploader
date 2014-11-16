'use strict';

describe('app welcome controller', function (){
    var $controllerConstructor, scope;
    
    //setup the module
    beforeEach(module('app'));

    //setup the function
    beforeEach(inject(function ($controller, $rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();
    }));

    it('should get created for testing without issue', function (){
        var welcome = $controllerConstructor('welcome', {$scope: scope});

        expect(welcome).not.toBe(null);
    })
})