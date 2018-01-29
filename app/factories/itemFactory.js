"use strict";

angular.module("TodoApp").factory("itemFactory", function(FBUrl, $q, $http){ 
  
  function getTodoItems(){
    return $q((resolve,reject)=>{
      $http.get(`${FBUrl}/items.json`)
      .then(data=>{
        resolve(data);
      });
    });
  }

  function addNewItem(todoItem) {
    return $q((resolve, reject)=>{
      $http.post(`${FBUrl}/items.json`,
      JSON.stringify(todoItem)
      ).then( data =>{
        console.log('todoItem',todoItem);
        resolve(todoItem);
      }).catch(err=>{
        console.log('err',err);
      });

    });
  }

  function removeTodo(itemKey){
    return $q((resolve, reject)=>{
      $http.delete(`${FBUrl}/items/${itemKey}.json`)
      .then(response=>{
        console.log('response',response);
        resolve(response);
      });
    });
  }

  return { removeTodo, getTodoItems, addNewItem };
});