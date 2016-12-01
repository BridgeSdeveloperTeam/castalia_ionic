// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.RESTModule', 'ionic-material', 'starter.CatalogIDModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//Google analytics
.run(function($rootScope, $location, $window, $ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    if($window.ga) {
      $window.ga.startTrackerWithId('UA-88011572-1');
    };
    
  });

  $rootScope.$on('$stateChangeSuccess', function (event) {
    if($window.ga) {
      $window.ga.trackView($location.path());
    }
    
  });
})
.config(function($ionicConfigProvider) {

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text('').icon('ion-android-arrow-back').previousTitleText(false);
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.register', {
    url: '/registro',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl',
        resolve: { isMember: function() {
          return false;
        }}
      }
    }
  })
  .state('app.register-member', {
    url: '/registro-socio',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl',
        resolve: { isMember: function() {
          return true;
        }}
    
      }
    }
  })
  .state('app.landing', {
    url: '/menu',
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html',
        controller: 'LandingCtrl'
      }
    }
  })

  .state('app.shopping', {
    url: '/compras',
    views: {
      'menuContent': {
        templateUrl: 'templates/shopping-menu.html',
        controller: 'ShoppingCtrl'
      }
    }
  })

  .state('app.catalog', {
    url: '/catalogo',
    views: {
      'menuContent': {
        templateUrl: 'templates/catalog.html',
        controller: 'CatalogCtrl'
      }
    }
  })

//Menus
  .state('app.castalia-categories', {
    url: '/castalia-categorias',
    views: {
      'menuContent': {
        templateUrl: 'templates/castalia-categories.html',
        controller: 'SubCatalogCtrl'
      }
    }
  })

  .state('app.trevo-categories', {
    url: '/trevo-categorias',
    views: {
      'menuContent': {
        templateUrl: 'templates/trevo-categories.html',
        controller: 'SubCatalogCtrl'
      }
    }
  })

  .state('app.sales-categories', {
    url: '/ofertas-categorias',
    views: {
      'menuContent': {
        templateUrl: 'templates/sales-categories.html',
        controller: 'SubCatalogCtrl'
      }
    }
  })

  //Dama

  .state('app.castalia-dame', {
    url: '/castalia-dama',
    views: {
      'menuContent': {
        templateUrl: 'templates/sub-categories.html',
        controller: 'DameCtrl',
        resolve: { isSales: function() {
          return false;
        }}
      }
    }
  })

  .state('app.sales-dame', {
    url: '/ofertas-dama',
    views: {
      'menuContent': {
        templateUrl: 'templates/sub-categories.html',
        controller: 'DameCtrl',
        resolve: { isSales: function() {
          return true;
        }}
      }
    }
  })

  //Product List
  .state('app.product-list', {
    url: '/lista-productos/:idCatalogo/:idLinea/:idConcepto',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/items-list.html',
        controller: 'ProductsCtrl',
        resolve: { productList: ['$stateParams', 'RESTCatalogService', function($stateParams, RESTCatalogService) {
          return RESTCatalogService.getProductList($stateParams);
          /*var products = [
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              {'imgSrc': 'img/boot.png', 'name': 'Bota dama', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          ];
          return products;*/
        } ] }
      }
    }
  })

  .state('app.product-detail', {
    url: '/detalle-producto',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/product-detail.html',
        controller: 'ProductDetailCtrl'
      }
    }
  })

  .state('app.help', {
    url: '/ayuda',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html'
      }
    }
  })

  .state('app.profile', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
