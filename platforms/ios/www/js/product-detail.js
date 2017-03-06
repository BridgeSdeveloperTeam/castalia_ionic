angular.module('starter.controllers')

.controller('ProductDetailCtrl', ['$scope', '$rootScope','$window', "$state", "$ionicHistory",
	function($scope, $rootScope, $window, $state, $ionicHistory) {

	$scope.productDetails = JSON.parse($window.localStorage["productDetail"]);

	$scope.isSales = $window.localStorage["ofertas"] === "1";
	$scope.selectedPrice = $window.localStorage["price"];
	$scope.showPrice = ($scope.selectedPrice === "0") ? false:true;
	if(parseInt($scope.selectedPrice) > 0 && $scope.isSales === true) {
		$scope.selectedPrice = "1";
	}


	$scope.openBrowser = function() {

		$window.ga.trackEvent('Button', 'Press', 'Producto');

		if($rootScope.isUser) {
			cordova.InAppBrowser.open('https://pedidoscastalia.com/_login', '_blank', 'location=yes');
		}else {
			$state.go('app.register');
		}
		
	};

	$scope.$on('catalog-changed', function(event) {
		
		
        $scope.selectedPrice = $window.localStorage["price"];
        
		$scope.showPrice = ($scope.selectedPrice === "0") ? false:true;
		if(parseInt($scope.selectedPrice) > 0 && $scope.isSales === true) {
			$scope.selectedPrice = "1";
		}
	    // do what you want to do
	});

	$scope.getPrice = function() {
		if($scope.isSales === true) {
			if($scope.productDetails["precio"] === null) {
				return "";
			}else {
				return  "$" + $scope.productDetails["precio"];
			}
		}else {
			if($scope.productDetails["precio" + $scope.selectedPrice] === null) {
				return "";
			}else {
				return "$" + $scope.productDetails["precio" + $scope.selectedPrice];
			}
		}
		
		
	};

}]);