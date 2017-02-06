angular.module('starter.controllers')

.controller('ProductDetailCtrl', ['$scope', '$rootScope','$window', "$state", "$ionicHistory",
	function($scope, $rootScope, $window, $state, $ionicHistory) {

	$scope.productDetails = JSON.parse($window.localStorage["productDetail"]);

	$scope.openBrowser = function() {

		$window.ga.trackEvent('Button', 'Press', 'Producto');

		if($rootScope.isUser) {
			cordova.InAppBrowser.open('https://pedidoscastalia.com/_login', '_blank', 'location=yes');
		}else {
			$state.go('app.register');
		}
		
	};

}]);