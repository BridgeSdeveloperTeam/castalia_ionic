angular.module('starter.controllers')

.controller('ProductDetailCtrl', ['$scope',function($scope) {

	$scope.openBrowser = function() {
		cordova.InAppBrowser.open('http://www.castalia.com.mx/', '_blank', 'location=yes');
	};
}]);