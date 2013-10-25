'use strict';


// Declare app level module which depends on filters, and services
angular.module('toyBuddyApp', [
  'ngRoute',
  'toyBuddyApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: 'ctrlCatalog'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
