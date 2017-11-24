'use strict';
 
angular.module('halanxApp')
  .controller('ForgetpassotpCtrl', function ($scope,forgetpassotp) {
      
    $scope.submitform = ()=>{
    
        var obj = {};
        
        obj.password= $scope.otp;
        obj.username= "c" + $scope.mobilenumber;
        
         
        console.log(obj)
       
          var promise = forgetpassotp.callserver(obj);
          promise.then((data)=>
          {
          console.log(data);
          if(data.key){
              $window.location.href="#/forgotpassnew.html";
          }
          },(err)=>{
          alert("error");
          })
       
    }
  });
