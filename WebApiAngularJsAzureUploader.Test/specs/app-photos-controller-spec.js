'use strict';

describe('app photos controller', function (){
    var $controller, $scope, $q, mockPhotoManager;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
            $controller = _$controller_;
            $scope = _$rootScope_.$new();
            $q = _$q_;
            mockPhotoManager = sinon.stub({
                load: function () { },
                remove: function () { }
            });
        }));

    it('should call photoManager.load() when activated', function () {
        var photos = $controller('photos', { $scope: $scope, photoManager: mockPhotoManager });
        expect(mockPhotoManager.load.calledOnce).toBe(true);
    })

    it('setPreviewPhoto should set vm.previewPhoto', function () {
        var photo = {};
        var photos = $controller('photos', { $scope: $scope, photoManager: mockPhotoManager });
        photos.setPreviewPhoto(photo);
        expect(photos.previewPhoto).toBe(photo);
    })

    it('remove should call photoManager.remove with photo arg', function () {
        var photo = {};
        var photos = $controller('photos', { $scope: $scope, photoManager: mockPhotoManager });
        photos.remove(photo);
        expect(mockPhotoManager.remove.calledWith(photo)).toBe(true);
    })
})