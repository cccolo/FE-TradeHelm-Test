'use strict';

angular.module('testAppApp', [
	'ui.bootstrap',
    'ngRoute',
	'smart-table'
  ])
  .config(function ($routeProvider, $httpProvider) {
	  
        $httpProvider.defaults.headers.common["Content-Type"] = 'application/json; charset=utf-8';
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
	  
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
