angular.module('starter.controllers')

.controller('LandingCtrl', ['$scope', '$window', function($scope, $window) {
	$scope.$on("$ionicView.enter", function(event, data){
	   // handle event
	   if($window.localStorage["userID"] && $window.localStorage["userID"] != "undefined") {
	   		$window.ga.setUserId($window.localStorage["userID"]);
	   }
		
	});
}]);