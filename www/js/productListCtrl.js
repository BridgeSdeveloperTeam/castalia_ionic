angular.module('starter.controllers')

.controller('ProductsCtrl', ['$scope', 'productList', '$state', '$window',
	function($scope, productList, $state, $window) {

	$scope.viewTitle = "Productos";

	var isSales = $window.localStorage["ofertas"] === "1";

	$scope.products = productList.data[0].filter(function(item){
		if(isSales) {
			return item.oferta == "1";
		}else {
			return item.oferta == "2";
		}
	});

	$scope.rowClicked = function(index) {
		$window.localStorage["productDetail"] = JSON.stringify($scope.products[index]);
		$state.go('app.product-detail');
	};

	$scope.listView = true;
	$scope.switchView = function() {
		$scope.listView = !$scope.listView;
	};
}]);