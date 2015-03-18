'use strict';

/**
 * @ngdoc function
 * @name nutritionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nutritionApp
 */
angular.module('nutritionApp')
  .controller('MainCtrl', function ($scope, search) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.executeFoodSearch = function(){
    	getAll($scope.foodSearch);
    }

    function getAll(foodSearchQuery) {
    	(new search()).$getAll({q:foodSearchQuery})
    	.then(function(data) {
    		$scope.results = data;
    	})
    }
  });
