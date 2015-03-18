angular.module('nutritionApp').factory('ndbo', function($resource) {
  var apiHomeUrl = 'http://api.nal.usda.gov/usda/ndb/reports/';
  return $resource("", {}, 
  {
    'getAll': { method: "GET", params: {
    	format : "json",
      ndbno : 0000,
      type : "f",
      api_key : PLACE KEY HERE
    }, url: apiHomeUrl}

  });
  
});