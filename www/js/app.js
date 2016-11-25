// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material'])

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
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
       
      }
    }
  })
  .state('app.landing', {
    url: '/landing',
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html',
        controller: 'LandingCtrl'
      }
    }
  })

  .state('app.shopping', {
    url: '/shopping',
    views: {
      'menuContent': {
        templateUrl: 'templates/shopping-menu.html',
        controller: 'ShoppingCtrl'
      }
    }
  })

  .state('app.catalog', {
    url: '/catalog',
    views: {
      'menuContent': {
        templateUrl: 'templates/catalog.html'
      }
    }
  })

//Menus
  .state('app.castalia-categories', {
    url: '/castalia-categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/castalia-categories.html'
      }
    }
  })

  .state('app.trevo-categories', {
    url: '/trevo-categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/trevo-categories.html'
      }
    }
  })

  .state('app.sales-categories', {
    url: '/sales-categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/sales-categories.html'
      }
    }
  })

  //Dama

  .state('app.castalia-dame', {
    url: '/castalia-dame',
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
    url: '/sales-dame',
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
    url: '/product-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/items-list.html',
        controller: 'ProductsCtrl',
        resolve: { productList: function() {
          var products = [
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
          return products;
        }}
      }
    }
  })

  .state('app.product-detail', {
    url: '/product-detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/product-detail.html',
        controller: 'ProductDetailCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
