angular.module('starter.controllers')

.controller('RegisterCtrl', ['$scope', 'RESTUserService', 'isMember', '$state', '$ionicHistory', '$window',
	function($scope, RESTUserService, isMember, $state, $ionicHistory, $window) {

	$scope.registerData = {};

	$scope.isMember = isMember;
	console.log("is member "+ isMember);

	if(isMember) {
		$scope.title = "Registro De Socios";
	}else {
		$scope.title = "Registro";
	}

	$scope.doRegister = function(form) {

		if(form.$valid) {
			if($scope.isMember) {
				
				RESTUserService.registerMember($scope.registerData)
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
						
						$window.localStorage["userID"] = response.data[0];
						$window.localStorage["nombre"] = $scope.registerData.nombre;
						$window.localStorage["domicilio"] = $scope.registerData.domicilio;
						$window.localStorage["cp"] = $scope.registerData.cp;
						$window.localStorage["telefono"] = $scope.registerData.telefono;
						$window.localStorage["email"] = $scope.registerData.email;
						$scope.registerData = {};
						form.$setPristine();
					
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