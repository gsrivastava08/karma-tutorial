'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('karmaTutorialApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should see maalik name as Gaurav Srivastava and tareef as null', function () {
    expect(scope.maalikName).toEqual('Gaurav Srivastava');
    expect(scope.tareef).toEqual(null);
  });

  describe('It will chek if getFacts function gets called', function(){
      var deferred, $rootScope, $httpBackend;
      beforeEach(inject(function ($controller, $rootScope, _$q_, _getfacts_, $injector) {
        scope = $rootScope.$new();
        $rootScope = $injector.get('$rootScope');
        deferred = _$q_.defer();
        $httpBackend = $injector.get('$httpBackend');
        MainCtrl = $controller('MainCtrl', {
          $scope: scope
          // place here mocked dependencies
        });
        spyOn(_getfacts_, 'getFacts').and.returnValue(deferred.promise);
      
      }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


        it('should get facts from API call', function(){
            deferred.resolve({data: {value: 'Some randome text'}});
            $httpBackend.expectGET('https://api.chucknorris.io/jokes/random?category=dev');
            $httpBackend.whenGET('https://api.chucknorris.io/jokes/random?category=dev').respond({
              value: 'Some randome text'
            });
            scope.getNewFacts();
            scope.$apply();
            expect(scope.tareef).toEqual('Some randome text');
            $httpBackend.flush();
        });
  })


});
