// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//Initiate Firebase Instance
var fb = new Firebase("https://cleo.firebaseio.com/");

var cleoMod = angular.module('starter', ['ionic', 'starter.controllers','ngCordova','firebase']);

cleoMod.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });



});

cleoMod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('register', {
    url: "/register",
    templateUrl: "templates/register.html",
    controller: 'RegisterCtrl'
  })

  .state('register.lists', {
    url: '/lists',
    views: {
     'lists-tab': {
        templateUrl: 'templates/lists.html',
        controller: 'ListsTabCtrl'
      }
    }
  })

  .state('register.key', {
    url: '/key',
    views: {
      'key-tab': {
        templateUrl: 'templates/key.html',
        controller: 'KeyTabCtrl'
      }
    }
  })

  .state('items', {
    url: "/items",
    templateUrl: "templates/items.html",
    controller: 'ItemCtrl'
  })

  .state('items.manage', {
    url: "/manage",
    templateUrl: "templates/itemsmanage.html",
    controller: 'ItemManCtrl'
  })

  .state('items.cat', {
    url: "/cat",
    templateUrl: "templates/itemscategory.html",
    controller: 'ItemCatCtrl'
  })

      
  .state('accounts', {
    url: '/accounts',
    controller: 'AccCtrl',
    templateUrl: 'templates/account.html'
  })

  .state('report', {
    url: '/report',
    controller: 'ReportCtrl',
    templateUrl: 'templates/report.html'
  })

  .state('settings', {
    url: '/settings',
    controller: 'SettingsCtrl',
    templateUrl: 'templates/settings.html'
  });

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');
});
