'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('toyBuddyApp.services', ['ngResource']).
	factory('svcCatalog', ['$resource', function($resource){
		return $resource('data/:id.json', {}, {
			query: {method:'GET', params:{id:'learningResource'}, isArray:true}
		});
}]);