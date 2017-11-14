'use strict';

/**
 * @ngdoc function
 * @name halanxApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the halanxApp
 */
angular.module('halanxApp')
  .controller('IndexCtrl', function ($scope,common,$window,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.index = {
      login:true,
      logout:true
    }

  //   if( localStorage.getItem("isLogin") !=null){
  //     if(localStorage.getItem("isLogin").length>0){
  //     common.isLogin = JSON.parse(localStorage.getItem("isLogin"));
  //   }
  // }
  
    $scope.$watch(function(){return common.isLogin}, function (newValue, oldValue) {
         
    if( localStorage.getItem("isLogin") !=null){
      if(localStorage.getItem("isLogin").length>0){
      common.isLogin = JSON.parse(localStorage.getItem("isLogin"));
    }
    }
           if(common.isLogin===false){
              $scope.index.login = false;
              $scope.index.logout = true;
             
           }
           else if(common.isLogin===true){
              $scope.index.login = true;
              $scope.index.logout = false;
           }
          
        }, true);

     $scope.$watch(function(){return common.isStore}, function (newValue, oldValue) {
         console.log(common.isStore);
           if(common.isStore===false){
              $scope.index.login = false;
              $scope.index.logout = true;
             
           }
            if(common.isStore===true){
              $scope.index.login = true;
              $scope.index.logout = false;
           }
          
        }, true);    

        
        if(localStorage.getItem("isLocated")!=null){
          if(localStorage.getItem("isLocated") == true){
            common.isLocated = true;
          }
        }
       
    if(common.isLogin){
    $scope.index.login = true;
    $scope.index.logout = false;
  }
    else{
      $scope.index.login = false;
      $scope.index.logout = true;
    }

    $scope.logout = ()=>{
      common.isLogin = false;
      common.isStore = false;
      // localStorage.clear();
      localStorage.setItem("isLogin",common.isLogin);
      localStorage.removeItem("token");
      localStorage.removeItem()
      $window.location.reload();
      
    }
  });
