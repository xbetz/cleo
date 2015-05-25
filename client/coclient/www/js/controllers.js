angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MenulistsCtrl', function($scope) {
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
