angular.module('nutritionApp').factory('search', function($resource) {
  var apiHomeUrl = 'http://api.nal.usda.gov/usda/ndb/search';
  return $resource("", {}, 
  {
    'getAll': { method: "GET", params: {
    	format : "json",
    	ndbno : "foodSearchQuery",
    	sort : "n",
    	max : 25,
    	offset : 0,
    	api_key : PLACE KEY HERE
    }, url: apiHomeUrl}

  });
  
});