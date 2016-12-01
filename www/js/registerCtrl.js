angular.module('starter.controllers')

.controller('RegisterCtrl', ['$scope', 'RESTUserService', 'isMember', '$state', '$ionicHistory', '$window',
	function($scope, RESTUserService, isMember, $state, $ionicHistory, $window) {

	$scope.registerData = {};

	$scope.isMember = isMember;

	if(isMember) {
		$scope.title = "Registro Socios";
	}else {
		$scope.title = "Registro";
	}

	$scope.doRegister = function(form) {

		if(form.$valid) {
			if($scope.isMember) {
				RESTUserService.registerUser($scope.registerData)
				.then(function(response){
					
					if(response.status == 200) {
						alert("Registro exitoso");
						form.$setPristine();
						$scope.registerData = {};
					}
					
				}, function(error) {
					console.log(error);
					alert("Hubo un error en el registro");
				});
			}else {
				RESTUserService.registerUser($scope.registerData)
				.then(function(response){
					
					if(response.status == 200) {
						form.$setPristine();
						$scope.registerData = {};
						$window.localStorage["userID"] = response.data[0];
						proceedToLanding();
					}
					

				}, function(error) {
					console.log(error);
					alert("Hubo un error en el registro");
				});
			}
			
		}else {
			alert("Por favor, llena todos los campos");
		}
	}

	function proceedToLanding() {
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go('app.landing');
	}

}]);