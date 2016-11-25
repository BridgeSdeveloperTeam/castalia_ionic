angular.module('starter.controllers')

.controller('ShoppingCtrl', ['$scope', function($scope) {

	$scope.openSales = function() {

		cordova.InAppBrowser.open('https://www.outletcastaliatrevo.com/', '_blank', 'location=yes');
	};

		$scope.openCastalia = function() {

		cordova.InAppBrowser.open('https://pedidoscastalia.com/_login', '_blank', 'location=yes');
	};

}]);