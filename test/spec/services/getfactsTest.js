'use strict';

describe('Service: getfacts', function () {

    var $httpBackend, getfacts

    beforeEach(module('karmaTutorialApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        getfacts = $injector.get('getfacts');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should get data from API', function(){
        $httpBackend.expectGET('https://api.chucknorris.io/jokes/random?category=dev');
        $httpBackend.whenGET('https://api.chucknorris.io/jokes/random?category=dev').respond({value: 'Some randome text'});
        getfacts.getFacts().then(function(data){
            expect(data.data).toEqual({value: 'Some randome text'});
        });
        $httpBackend.flush();
    });

});