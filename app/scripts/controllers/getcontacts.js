'use strict';

angular.module('testAppApp')
  
  .controller('GetcontactsCtrl',  function ($scope, $http) {
    
	$scope.itemsByPage = 1;
	
	$scope.rowCollection = [
         {ContactName: 'Laurent', ContactTitle: 'Renard',  OutletName : 102, ContactProfile: 'whatever@gmail.com'},
		 {ContactName: 'Laurent', ContactTitle: 'Renard',  OutletName : 102, ContactProfile: 'whatever@gmail.com'},
         {ContactName: 'Laurent', ContactTitle: 'Renard',  OutletName : 102, ContactProfile: 'whatever@gmail.com'}, 
		 {ContactName: 'Laurent', ContactTitle: 'Renard',  OutletName : 102, ContactProfile: 'whatever@gmail.com'}
    ];
	
	
	
	/*$http.get('resources/Contacts.json').success(function(response) {
       //  $scope.rowCollection = response.data;
    });*/
	
});
	