"use strict";

angular.module("TodoApp").factory("itemFactory", function(FBUrl, $q, $http){ 
  
  function getTodoItems(){
    return $q((resolve,reject)=>{
      $http.get(`${FBUrl}/items.json`)
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
    return $q((resolve, reject)=>{
      $http.delete(`${FBUrl}/items/${itemKey}.json`)
      .then(response=>{
        resolve(response);
      });
    });
  }

  return { removeTodo, getTodoItems, addNewItem };
});