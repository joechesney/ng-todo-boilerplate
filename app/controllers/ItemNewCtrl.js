
"use strict";

angular.module("TodoApp")
.controller("ItemNewCtrl", function($scope, $location, itemFactory){
  let todoItem =  {
    id: 0,
    task: "",
    isCompleted: false,
    dueDate: "",
    assignedTo: "",
    location: "",
    urgency: "",
    dependencies: ""
  };

  $scope.saveItem = () =>{
    itemFactory.addNewItem($scope.todoItem)
    .then(data=>{
      itemFactory.getTodoItems()
      .then(allItems=>{
        $location.url("/items/list");
      });
    });
  };

  $scope.title = "Edit";
});