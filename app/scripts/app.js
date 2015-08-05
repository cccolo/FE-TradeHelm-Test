'use strict';

angular.module('testAppApp', [
    'ngRoute',
	'smart-table'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/getcontacts.html',
        controller: 'GetcontactsCtrl',
        controllerAs: 'getContacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
