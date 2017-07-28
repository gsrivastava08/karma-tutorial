'use strict';

/**
 * @ngdoc function
 * @name karmaTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karmaTutorialApp
 */
angular.module('karmaTutorialApp')
  .controller('MainCtrl', ['$scope', 'getfacts', function ($scope, getfacts) {
    $scope.maalikName = 'Gaurav Srivastava';
    $scope.tareef = null;

    $scope.getNewFacts = function(){
      getfacts.getFacts().then(function(data){
        var tmp = data.data.value.split('Chuck Norris').join($scope.maalikName);
        $scope.tareef = tmp;     
      });
    };

    $scope.getNewFacts();

  }]);
