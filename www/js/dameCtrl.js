angular.module('starter.controllers')

.controller('DameCtrl', ['$scope', 'isSales', '$state', function($scope, isSales, $state) {

	if(isSales) {
		$scope.viewTitle = "Ofertas Dama"

		$scope.bannerImage = 'img/salesDama/sales_image.png'

		$scope.categories =[{'imgSrc': 'img/salesDama/sales_01.png', 'name': 'Tacones'}, 
						{'imgSrc': 'img/salesDama/sales_02.png', 'name': 'Plataformas'},
						{'imgSrc': 'img/salesDama/sales_03.png', 'name': 'Sandalias'},
						{'imgSrc': 'img/salesDama/sales_04.png', 'name': 'Teens'},
						{'imgSrc': 'img/salesDama/sales_05.png', 'name': 'Flats'},
						{'imgSrc': 'img/salesDama/sales_06.png', 'name': 'Urbano'},
						{'imgSrc': 'img/salesDama/sales_07.png', 'name': 'Bolsas'},
						{'imgSrc': 'img/salesDama/sales_08.png', 'name': 'Deportivo'},
						{'imgSrc': 'img/salesDama/sales_09.png', 'name': 'Confort'},
						{'imgSrc': 'img/salesDama/sales_10.png', 'name': 'Botas'}];

	}else {
		$scope.viewTitle = "Castalia Dama"

		$scope.bannerImage = 'img/castaliaDama/dama_image.png'

		$scope.categories =[{'imgSrc': 'img/castaliaDama/dama_01.png', 'name': 'Tacones'}, 
						{'imgSrc': 'img/castaliaDama/dama_02.png', 'name': 'Plataformas'},
						{'imgSrc': 'img/castaliaDama/dama_03.png', 'name': 'Sandalias'},
						{'imgSrc': 'img/castaliaDama/dama_04.png', 'name': 'Teens'},
						{'imgSrc': 'img/castaliaDama/dama_05.png', 'name': 'Flats'},
						{'imgSrc': 'img/castaliaDama/dama_06.png', 'name': 'Urbano'},
						{'imgSrc': 'img/castaliaDama/dama_07.png', 'name': 'Bolsas'},
						{'imgSrc': 'img/castaliaDama/dama_08.png', 'name': 'Deportivo'},
						{'imgSrc': 'img/castaliaDama/dama_09.png', 'name': 'Confort'},
						{'imgSrc': 'img/castaliaDama/dama_10.png', 'name': 'Botas'}];

	}

	

	$scope.rowClicked = function(index) {
		$state.go('app.product-list');

	};

}]);