"use strict";

angular.module("TodoApp")
.controller("ItemListCtrl", function($scope, $location, itemFactory, filterFactory) {
  $scope.searchTerm = filterFactory;

  itemFactory.getTodoItems()
  .then((data)=>{
    $scope.items = Object.keys(data.data).map(key => {
      data.data[key].FBid = key;
      return data.data[key];
    });
  });

  $scope.removeItem= function(){
    let itemKey = this.item.FBid;
    itemFactory.removeTodo(itemKey)
    .then(function(response){
      itemFactory.getTodoItems()
      .then(allItems=>{
        $scope.items = Object.keys(allItems.data).map(key => {
          allItems.data[key].FBid = key;
          return allItems.data[key];
        });
        $location.url("/items/list");
      });
    });
  };

  $scope.updateIsCompleted = function(FBid, value){
    itemFactory.updateIsCompletedOnFB(FBid, value)
    .then(response=>{
      // console.log('response888',response);
    });
  };
});