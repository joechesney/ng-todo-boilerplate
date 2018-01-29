
"use strict";

angular.module("TodoApp")
.controller("ItemDetailCtrl", function($scope, itemFactory, $routeParams){ 

  itemFactory.getTodoItems()
  .then(someData=>{
    let todoItems = Object.values(someData.data);
    $scope.selectedItem = todoItems.find((item)=>{
      return item.FBid === $routeParams.id;
    });
  });
  

});