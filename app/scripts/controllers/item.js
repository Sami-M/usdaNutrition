'use strict';

/**
 * @ngdoc function
 * @name nutritionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nutritionApp
 */
angular.module('nutritionApp')
  .controller('ItemCtrl', function ($scope, $routeParams, ndbo	) {
    console.log($routeParams.ndbnoId);
    getAll($routeParams.ndbnoId);

    function getAll(ndbnoId) {
    	(new ndbo()).$getAll({ndbno:ndbnoId})
    	.then(function(data) {
    		$scope.results = data;
    		console.log(JSON.stringify($scope.results));
    	})
    }
  });
