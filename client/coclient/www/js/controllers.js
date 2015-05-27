angular.module('starter.controllers', [])


.controller('RegisterCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ItemCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ItemManCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ItemCatCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('AccCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ReportCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('SettingsCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ListsTabCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.menulists = [
    { title: 'Tapas', id: 1 , cat:'app', src:'img/app1.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Cheese Stick', id: 2 , cat:'app', src:'img/app2.png', price:'3', desc:'Lorem Ipsum'},
    { title: 'Bruscheta', id: 3 , cat:'app', src:'img/app3.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Duck Steak', id: 4 , cat:'main', src:'img/main1.png', price:'5', desc:'Lorem Ipsum'},
    { title: 'Lamb Steak', id: 5 , cat:'main', src:'img/main2.png', price:'7.5', desc:'Lorem Ipsum'},
    { title: 'Chicken Steak', id: 6 , cat:'main', src:'img/main3.png', price:'8', desc:'Lorem Ipsum'},
    { title: 'Choco Ice Cream', id: 7 , cat:'dres', src:'img/des1.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Lava Cake', id: 8 , cat:'dres', src:'img/des2.png', price:'1.5', desc:'Lorem Ipsum'},
    { title: 'Strawberry Shortcake', id: 9 , cat:'dres', src:'img/des3.png', price:'2.5', desc:'Lorem Ipsum'}
  ];
})

.controller('KeyTabCtrl', function($scope, $ionicSideMenuDelegate) {

})


.controller('ListsTabCtrl', function($scope) {
  $scope.menulists = [
    { title: 'Tapas', id: 1 , cat:'app', src:'img/app1.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Cheese Stick', id: 2 , cat:'app', src:'img/app2.png', price:'3', desc:'Lorem Ipsum'},
    { title: 'Bruscheta', id: 3 , cat:'app', src:'img/app3.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Duck Steak', id: 4 , cat:'main', src:'img/main1.png', price:'5', desc:'Lorem Ipsum'},
    { title: 'Lamb Steak', id: 5 , cat:'main', src:'img/main2.png', price:'7.5', desc:'Lorem Ipsum'},
    { title: 'Chicken Steak', id: 6 , cat:'main', src:'img/main3.png', price:'8', desc:'Lorem Ipsum'},
    { title: 'Choco Ice Cream', id: 7 , cat:'dres', src:'img/des1.png', price:'2', desc:'Lorem Ipsum'},
    { title: 'Lava Cake', id: 8 , cat:'dres', src:'img/des2.png', price:'1.5', desc:'Lorem Ipsum'},
    { title: 'Strawberry Shortcake', id: 9 , cat:'dres', src:'img/des3.png', price:'2.5', desc:'Lorem Ipsum'}
  ];
})

.controller('MenulistCtrl', function($scope, $stateParams) {
});
