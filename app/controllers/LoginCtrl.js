"use strict";

angular.module("TodoApp")
.controller("LoginCtrl", function($scope, authFactory, $window){

  $scope.test = "hello";

  $scope.login = () =>{
  };
  
  $scope.register = () =>{
    authFactory.createUser($scope.account)
    .then( (user) =>{
      console.log('newUser',user);
      $scope.login();
    })
    .catch( error=>{
      console.log('errrorq',error);
    });
  };

  $scope.login = ()=>{
    authFactory.loginUser($scope.account).then(user=>{
      console.log('logged in user: ',user);
      $window.location.href = "#!/items/list";
    });
  };
});