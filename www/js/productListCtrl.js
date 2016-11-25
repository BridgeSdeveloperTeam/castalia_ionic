angular.module('starter.controllers')

.controller('ProductsCtrl', ['$scope', 'productList', '$state', function($scope, productList, $state) {

	$scope.viewTitle = "Zapato Dama";

	$scope.products = productList;

	$scope.rowClicked = function(index) {
		$state.go('app.product-detail');
	};

	$scope.listView = true;
	$scope.switchView = function() {
		$scope.listView = !$scope.listView;
	};
}]);