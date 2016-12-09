angular.module('starter.controllers')

.controller('ProductDetailCtrl', ['$scope', '$window', function($scope, $window) {

	$scope.productDetails = JSON.parse($window.localStorage["productDetail"]);

	$scope.openBrowser = function() {
		$window.ga.trackEvent('Button', 'Press', 'Producto');
		cordova.InAppBrowser.open('https://pedidoscastalia.com/_login', '_blank', 'location=yes');
	};

	$scope.photoZoom = function() {
		cordova.InAppBrowser.open('http://castaliaapp.com/imagenes/'+$scope.productDetails.imagen, '_blank', 'location=no,enableViewportScale=true');
	};
}]);