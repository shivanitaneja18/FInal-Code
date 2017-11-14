'use strict';

/**
 * @ngdoc service
 * @name halanxApp.favourite
 * @description
 * # favourite
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('favourite', function ($http,$q) {
   var object = {
         arr : [],
        callserver : function(){
         var pr = $q.defer();
         var url = "https://api.halanx.com/stores/";
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     } , 
        favproduct : function(){
          var pr = $q.defer();
         var url = "https://api.halanx.com/users/8506078226/";
        
         $http.get(url).then(function(data){
             pr.resolve(data.data.FavoriteItems)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
    },
       storeserver : function(id){
           console.log(id)
         var pr = $q.defer();
         var url = "https://api.halanx.com/stores/"+id;
        
                console.log(url)
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     },
        productserver : function(id){
         var pr = $q.defer();
         var url = "https://api.halanx.com/stores/"+id+"/products";
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     },
        load : function(){
           
              var usedata = localStorage.getItem("storeid")
              console.log(usedata)
          pushdata=JSON.parse(usedata)
          return pushdata;
        },
        gettoken : function(){
         var token = localStorage.getItem("token")
           
        //   var mytoken=JSON.parse(token)
          return token; 
        },
        loaddata : function(){
            var usedata = localStorage.getItem("storedata")
              console.log(usedata)
          this.arr=JSON.parse(usedata)
        } ,
        loadcounter : function(){
            
           var usedata = localStorage.getItem("counter")
              
          var counter=JSON.parse(usedata)
          console.log(counter)
          return counter;
        },
        saveid : function(data){
                     var json = JSON.stringify(data)
         localStorage.setItem('storeid',json);
            console.log(localStorage)
        },
        savedata : function(arr){
                  var json = JSON.stringify(arr)
         localStorage.setItem('storedata',json);
            console.log(localStorage)
        },
        savecounter : function(counter){
            console.log(counter)
                   var json = JSON.stringify(counter)
         localStorage.setItem('counter',json);
        },
            addproduct(modal){
             
                
                console.log(modal)
                this.arr.push(modal)
                console.log(this.arr)
                this.savedata(this.arr)
            },
        check : function(modal){
       console.log("modal"+modal)
      this.arr = this.arr || [];
      var match =  this.arr.filter(function(obj){
           return obj.id == modal.id
       })
      
         return match;
      },
        arrlength : function(){
           

        return this.arr.length;
    
        },
        callfav : function(obj,val,key){
            console.log(obj)
              var pr = $q.defer();
         var url = "https://api.halanx.com/users/favs/"+val+"/";
        
                
         $http.patch(url,obj,{
                headers: {
                    'Authorization': 'Token ' +key 
                }
         }).then(function(data){
             pr.resolve(data.data)
             console.log("success")
        
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
        },
        favlist : function(key){
                
              var pr = $q.defer();
         var url = "https://api.halanx.com/users/detail";
        
                
         $http.get(url, {
//             withCredentials: true,
                headers: {
                    'Authorization': 'Token ' +key 
                }
         }).then(function(data){
             pr.resolve(data.data)
             console.log("success")
        
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
        },
        searchlist : function(search){
                   var pr = $q.defer();
         var url = "http://api.halanx.com:9200/product/_search?q=ProductName:"+search;
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data.hits.hits)
             console.log("success")
        
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
        }
        
    }
    return object
  });
