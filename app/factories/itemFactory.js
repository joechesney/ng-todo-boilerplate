"use strict";

angular.module("TodoApp").factory("itemFactory", function(FBUrl, $q, $http){ 
  
  function getTodoItems(){
    return $q((resolve,reject)=>{
      $http.get(`${FBUrl}/items.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
      .then(data=>{
        Object.keys(data.data).map(key => {
          data.data[key].FBid = key;
        });
        resolve(data);
      });
    });
  }

  function addNewItem(todoItem) {
    return $q((resolve, reject)=>{
      $http.post(`${FBUrl}/items.json`,
      JSON.stringify(todoItem)
      ).then( data =>{
        resolve(todoItem);
      }).catch(err=>{
        console.log('err',err);
      });
    });
  }

  function removeTodo(itemKey){
    // double check that the fb id exists. 
    // if it doesnt exist, it will delete entire database
    return $q((resolve, reject)=>{
      $http.delete(`${FBUrl}/items/${itemKey}.json`)
      .then(response=>{
        resolve(response);
      });
    });
  }

  function updateIsCompletedOnFB(itemId, value){
    return $q((resolve, reject)=>{
      $http.patch(`${FBUrl}/items/${itemId}.json`, JSON.stringify({"isCompleted": value}))
      .then(response=>{
        resolve(response);
      });
    });
  }

  function updateItem(item){
    console.log('topof update',item);
    return $q((resolve, reject)=>{
      $http.put(`${FBUrl}/items/${item.FBid}.json`, JSON.stringify(item))
      .then(response=>{
        resolve(response);
      });
    });
  }

  return { removeTodo, getTodoItems, addNewItem, updateIsCompletedOnFB, updateItem };
});