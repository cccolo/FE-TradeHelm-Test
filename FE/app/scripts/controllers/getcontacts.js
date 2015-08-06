'use strict';

angular.module('testAppApp')
  .controller('GetcontactsCtrl',  function ($scope, $http) {
	  
	$scope.rowCollection = [];
	$scope.totalItems = 0;
	$scope.currentPage = 0;
	$scope.maxSize = 25;
	$scope.orderByParam = '';
	
	$scope.pageChanged = function() {
		$scope.getContactDataFromServer();
	};

	$scope.order = function(param){
		$scope.reverse = ($scope.orderByParam === param) ? !$scope.reverse : false;
		$scope.orderByParam = param;
	};
	
	$scope.getContactDataFromServer = function(){
	   $http({url: 'http://localhost:1234/api/contacts', method: "GET", params: {page: $scope.currentPage, pageSize: $scope.maxSize}}).then(function(response) {
			$scope.rowCollection = response.data.Contacts;
			$scope.totalItems = response.data.Total;
	   });
	};
	
	
	$scope.getContactDataFromServer();
});
	