
"use strict";

angular.module("TodoApp")
.controller("ItemNewCtrl", function($scope, $location, itemFactory){
  let newTask =  {
    id: 0,
    task: "",
    isCompleted: false,
    dueDate: "",
    assignedTo: "",
    location: "",
    urgency: "",
    dependencies: ""
  };

  $scope.addNewTask = () =>{
    itemFactory.addNewItem($scope.newTask)
    .then(data=>{
      itemFactory.getTodoItems()
      .then(allItems=>{
        $location.url("/items/list");
      });
    });
  };
});