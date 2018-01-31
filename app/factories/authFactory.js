"use strict";

angular.module("TodoApp").factory("authFactory", function(FBCreds, $q){

  let currentUser = null;

  const createUser = function({email, password}){
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  };

  let loginUser = ({email, password})=>{
    return firebase.auth()
    .signInWithEmailAndPassword(email, password);
  };

  let logoutUser = () => {
    return firebase.auth().signOut();
  };

  let isAuthenticated = () => {
    console.log("isAuthenticated called AuthFactory");
    return $q((resolve, reject) => {
      console.log("firing onAuthStateChanged");
      firebase.auth().onAuthStateChanged( (user) => {
        console.log("onAuthStateChanged finished");
        if (user) {
          console.log("user", user);
          currentUser = user.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  let getCurrentUser = () => {
    return currentUser;
  };

  return { createUser, loginUser, getCurrentUser, isAuthenticated, logoutUser };
});