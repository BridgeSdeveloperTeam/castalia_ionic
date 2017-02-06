angular.module('starter.controllers')
 
.controller('CastaliaInfoCtrl', ['$scope', '$rootScope', '$window', '$state', '$ionicHistory',
	function($scope, $rootScope, $window, $state, $ionicHistory) {

	$scope.continueButtonTapped = function() {

		if($rootScope.isUser) {
			goToPage('app.landing');
		}else {
			goToPage('app.catalog');
		}
	};

	$scope.registerButtonTapped = function() {

		goToPage('app.register');
	};

	function goToPage(state) {
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go(state);
	}
}]);