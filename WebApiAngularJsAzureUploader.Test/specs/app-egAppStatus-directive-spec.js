'use strict';

describe('app egAppStatus directive', function () {
    var el, mockAppInfo;

    beforeEach(module('app'));
    beforeEach(module('app/egAppStatus.html'));
    beforeEach(module(function ($provide) {
            mockAppInfo = sinon.stub({
                busy: false,
                message: 'test message',
                setInfo: function () { }
            });
            
            $provide.value('appInfo', mockAppInfo);
    }));
        
    beforeEach(inject(function ($compile, $rootScope) {
            var scope = $rootScope;
            scope.busy = false;
            scope.message = '';

            el = angular.element('<eg-app-status></eg-app-status>');
                        
            $compile(el)(scope);
            scope.$digest();
            //console.log(el[0].outerHTML);
        }));

    it('should show appInfo.message', function () { 
        expect(el.text()).toContain("test message");
    });
});