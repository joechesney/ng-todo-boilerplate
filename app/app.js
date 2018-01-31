"use strict";

let isAuth = (authFactory) =>{
  new Promise((resolve, reject)=>{
    authFactory.isAuthenticated().then(userBoolean =>{
      console.log('user',userBoolean);
      if(userBoolean){
        console.log('user logged in',userBoolean);
        resolve();
      }else{
        console.log('Not Authenticated',userBoolean);
        reject();
      }
    });
  });
};

angular.module("TodoApp", ["ngRoute"])
.constant("FBUrl", "https://testetization.firebaseio.com/todos")
.config(($routeProvider)=>{
  // TODO: add routing
  $routeProvider
  .when("/login", {
    templateUrl:"partials/user-form.html",
    controller:"LoginCtrl"
  })
  .when("/items/list", {
    templateUrl:"partials/item-list.html",
    controller:"ItemListCtrl",
    resolve: { isAuth }
  })
  .when("/items/new", {
    templateUrl:"partials/item-new.html",
    controller:"ItemNewCtrl",
    resolve: { isAuth }
  })
  .when("/items/deets/:id/edit", {
    templateUrl:"partials/item-new.html",
    controller:"ItemEditCtrl",
    resolve: { isAuth }
  })
  .when("/items/deets/:id", {
    templateUrl:"partials/item-details.html",
    controller:"ItemDetailCtrl",
    resolve: { isAuth }
  })
  .otherwise("/login");
})
.run(FBCreds =>{
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain
  };
    firebase.initializeApp(authConfig);
});


