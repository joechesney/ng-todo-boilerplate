"use strict";

angular.module("TodoApp")
.controller("ItemEditCtrl", function($scope, $routeParams, itemFactory, $location){

  itemFactory.getTodoItems()
  .then(({data})=>{
    console.log('item getting got:',data[$routeParams.id]);
    $scope.todoItem = data[$routeParams.id];
  });
  
  $scope.saveItem = () =>{
    itemFactory.updateItem($scope.todoItem)
    .then(data=>{
      console.log('dataaftersave',data);
      $location.url(`/items/deets/${$scope.todoItem.FBid}`);
    });
  };

  $scope.title = "Edit";
});