angular.module('starter.controllers')

.controller('ProductsCtrl', ['$scope', '$stateParams', '$state', '$window', 'CatalogIDService', '$ionicHistory', 'RESTCatalogService', '$ionicNavBarDelegate', '$timeout',
	function($scope, $stateParams, $state, $window, CatalogIDService, $ionicHistory, RESTCatalogService, $ionicNavBarDelegate, $timeout) {

	$scope.showSubheader = false;
	$scope.search = {
		query:""
	};
	$scope.$on("$ionicView.enter", function(event, data){
		$scope.isSales = $window.localStorage["ofertas"] === "1";
		if($ionicHistory.forwardView() === null) {

			RESTCatalogService.getProductList($stateParams).then(function(productList){
				//console.log(productList);
				if(productList.data !== null ) {
					
					$scope.products = productList.data[0].filter(function(item){
						if($scope.isSales) {
							return item.oferta == "1";
						}else {
							return item.oferta == "2";
						}
					});
					
				}

			});
		}

		$scope.viewTitle = CatalogIDService.getConceptNameForId($stateParams.idConcepto);
		
	});
	
	$scope.isSales = $window.localStorage["ofertas"] === "1";
	$scope.selectedPrice = $window.localStorage["price"];
	$scope.showPrice = ($scope.selectedPrice === "0") ? false:true;
	//If we are on sales, show only price 1
	if(parseInt($scope.selectedPrice) > 0 && $scope.isSales === true) {
		$scope.selectedPrice = "1";
	}
	

	$scope.$on('catalog-changed', function(event) {
		
        $scope.selectedPrice = $window.localStorage["price"];
		$scope.showPrice = ($scope.selectedPrice === "0") ? false:true;
		if(parseInt($scope.selectedPrice) > 0 && $scope.isSales === true) {
			$scope.selectedPrice = "1";
		}
	    // do what you want to do
	});

	$scope.getPrice = function(item) {

		if($scope.isSales === true) {
			if(item["precio"] === null) {
				return "";
			} else {
				return "$" + item["precio"];
			}
			
		}else {
			if(item["precio" + $scope.selectedPrice] === null) {
				return "";
			}else {

				return "$" + item["precio" + $scope.selectedPrice];
			}
		}
		
		
	};

	$scope.rowClicked = function(item) {
		$window.localStorage["productDetail"] = JSON.stringify(item);
		$state.go('app.product-detail');
	};

	$scope.listView = true;

	$scope.switchView = function() {
		$scope.listView = !$scope.listView;
	};

	$scope.showSearchBar = function(show) {
		$scope.showSubheader = show;
		if(show == false) {
			$scope.search.query = '';
		}
	};

}])
.filter('searchProducts', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    if(items) {
	    for (var i = 0; i < items.length; i++) {
	    	var item = items[i];
	     	if (query) {
	        	if (letterMatch.test(item.sku.substring(0, query.length))) {
	          		filtered.push(item);
	        	}
	      	} else {
	        	filtered.push(item);
	      	}
	    }
    }

    return filtered;
  };
});
