"use strict";

angular.module("TodoApp")
.controller("ItemListCtrl", function($scope, $location, itemFactory, filterFactory) {
  $scope.searchTerm = filterFactory;
  itemFactory.getTodoItems()
  .then((data)=>{
    console.log('data.data',data.data);
    // $scope.items = Object.values(data.data);
    $scope.items = Object.keys(data.data).map(key => {
      data.data[key].id = key;
      return data.data[key];
    });
    console.log('scope items',$scope.items);
  });

  $scope.removeItem= function(){
    console.log('this',this.item.id);
    let itemKey = this.item.id;
    itemFactory.removeTodo(itemKey)
    .then(function(response){
      console.log('response2',response);
      itemFactory.getTodoItems()
      .then(allItems=>{
        console.log('allItems',allItems);
        $scope.items = Object.keys(allItems.data).map(key => {
          allItems.data[key].id = key;
          return allItems.data[key];
        });
        console.log('allItemsAFTER',$scope.items);

        $location.url("/items/list");
      });
    });
  };
});