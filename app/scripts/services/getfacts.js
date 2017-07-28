'use strict';

angular.module('karmaTutorialApp').factory('getfacts', ['$http', function($http){

    var getFacts = function(){
        return $http.get('https://api.chucknorris.io/jokes/random?category=dev');
    };

    return {getFacts: getFacts};

}]);