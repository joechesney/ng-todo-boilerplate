"use strict";

angular.module("TodoApp").factory("AuthFactory", function(FBCreds){
  let createUser = function(userObj){
    return firebase
    .auth()
    .createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(({code, message})=>{
      console.log('jdvvfdjksdj',code, message);
    
    });

  };

});