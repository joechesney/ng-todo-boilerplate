
"use strict";

angular.module("TodoApp")
.controller("ItemDetailCtrl", function($scope, itemFactory, $routeParams){ 
  let todoItems = itemFactory.getTodoItems();
  // $scope.selectedItem = todoItems.find((item)=>{
  //   return item.id === +$routeParams.id;
  // });
});