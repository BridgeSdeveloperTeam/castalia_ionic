angular.module('starter.controllers')

.controller('ShoppingCtrl', ['$scope', '$window', function($scope, $window) {

	$scope.openSales = function() {

		$window.ga.trackEvent('Button', 'Press', 'Ofertas');
		cordova.InAppBrowser.open('https://www.outletcastaliatrevo.com/', '_blank', 'location=yes');
	};

	$scope.openCastalia = function() {
		$window.ga.trackEvent('Button', 'Press', 'Pedidos');
		cordova.InAppBrowser.open('https://pedidoscastalia.com/_login', '_blank', 'location=yes');
	};

}]);