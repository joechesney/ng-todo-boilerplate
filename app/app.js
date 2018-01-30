"use strict";

angular.module("TodoApp", ["ngRoute"])
.constant("FBUrl", "https://testetization.firebaseio.com/todos")
.config(($routeProvider)=>{
  // TODO: add routing
  $routeProvider
  .when("/items/list", {
    templateUrl:"partials/item-list.html",
    controller:"ItemListCtrl"
  })
  .when("/items/new", {
    templateUrl:"partials/item-new.html",
    controller:"ItemNewCtrl"
  })
  .when("/items/deets/:id/edit", {
    templateUrl:"partials/item-new.html",
    controller:"ItemEditCtrl"
  })
  .when("/items/deets/:id", {
    templateUrl:"partials/item-details.html",
    controller:"ItemDetailCtrl"
  })
  .otherwise("/items/list");
});


