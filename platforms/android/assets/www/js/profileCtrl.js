angular.module('starter.controllers')

.controller('ProfileCtrl', ['$scope', '$window', function($scope, $window) {

	$scope.userData = {
		nombre: $window.localStorage["nombre"],
		domicilio: $window.localStorage["domicilio"],
		cp: $window.localStorage["cp"],
		telefono: parseInt($window.localStorage["telefono"]),
		email: $window.localStorage["email"]
	};

}]);