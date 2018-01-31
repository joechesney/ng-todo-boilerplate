"use strict";

angular.module("TodoApp")
.controller("NavCtrl", function($scope, $location, filterFactory, $window, authFactory){

  $scope.searchTerm = filterFactory;

  $scope.isActive = function(viewLocation){
    return viewLocation === $location.path();
  };

  $scope.navItems = [
    {
      name:"Logout",
      url:"#!/logout"
    },
    {
      name:"Login",
      url:"#!/login",
      bang: "!"
    },
    {
      name:"All Items",
      url:"#!/items/list"
    },
    {
      name:"Add New Item",
      url:"#!/items/new"
    }
  ]; 
 // need some more stuff here
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      $scope.isLoggin = true;
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      $window.location.href = "#!/login";
    }
  });


  $scope.navigate = navUrl =>{
    console.log('navUrl',navUrl);
    if(navUrl === "#!/logout"){
      authFactory.logoutUser();
    } else {
      $window.location.href = navUrl;
    }
  };

  
});