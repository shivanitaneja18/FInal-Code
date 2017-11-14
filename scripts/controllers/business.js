'use strict';

/**
 * @ngdoc function
 * @name halanxApp.controller:BusinessCtrl
 * @description
 * # BusinessCtrl
 * Controller of the halanxApp
 */
angular.module('halanxApp')
  .controller('BusinessCtrl', function ($scope,$rootScope,$window,business) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hxpadata = [];
    
        $scope.showData = ()=> {
            var token = localStorage.getItem("store_token");
            var sid = localStorage.getItem("store_id");
            console.log(token);
            var promise = business.getdata(token,sid);
            promise.then((data)=>{
                  console.log("aay yah pe");
                  console.log(data);
                  $scope.hxpadata = data.data;
                
              },(err)=>{
                  console.log("error");
              })
        }
    
        $scope.showData();

    var obj1 = {};

     $scope.$watch(function(){return JSON.parse(localStorage.storeLocation).Latitude}, function (newValue, oldValue) {
         
           if(oldValue != newValue){
              obj1.Latitude = JSON.parse(localStorage.storeLocation).Latitude;
              obj1.Longitude = JSON.parse(localStorage.storeLocation).Longitude;
    
             
           }
           
          
        }, true);


    obj1.Latitude = JSON.parse(localStorage.storeLocation).Latitude;
    obj1.Longitude = JSON.parse(localStorage.storeLocation).Longitude;
    
    console.log(localStorage.getItem("store_token"));
    // var obj = localStorage.getItem("store_token")
    let token = localStorage.getItem("store_token");
    $scope.submitaboutform = ()=>{
    
        
        obj1.CompanyLegalName = $scope.hxpadata.CompanyLegalName;
        obj1.PANNumber = $scope.hxpadata.PANNumber;
        
         
        console.log(obj1)
       
          var promise = business.callserver(obj1,token);
          promise.then((data)=>{
                console.log(data);
                //  $window.location.assign("#hxpabank");
                    $window.location.reload();
			},(err)=>{
				console.log("error");
			})
       
    }

    $scope.submitbankform = ()=>{
          // if(localStorage.token){
            var token = localStorage.getItem("store_token");
            console.log(token);

            var obj = {};
            obj.BankAccountNumber = $scope.hxpadata.BankAccountNumber;
            obj.BankAccountType = $scope.hxpadata.BankAccountType;
            obj.IFSCCode = $scope.hxpadata.IFSCCode;
            obj.BankBranchAddress = $scope.hxpadata.BankBranchAddress;
            obj.BankBranch = $scope.hxpadata.BankBranch;
            obj.BankName = $scope.hxpadata.BankName;
             
            console.log(obj)
           
              var promise = business.callserver(obj, token);
              promise.then((data)=>{

                    console.log(data);
                    // $window.location.assign("#dashboard");
                   
                },(err)=>{
                    console.log("error");
                })
        // }
    }

    $scope.submittimeform = ()=>{
      
          var obj2 = {};
          obj2 = {
            'MondayOpeningTime': $scope.hxpadata.MondayOpeningTime,
            'TuesdayOpeningTime': $scope.hxpadata.TuesdayOpeningTime,
            'WednesdayOpeningTime': $scope.hxpadata.WednesdayOpeningTime,
            'ThursdayOpeningTime': $scope.hxpadata.ThursdayOpeningTime,
            'FridayOpeningTime': $scope.hxpadata.FridayOpeningTime,
            'SaturdayOpeningTime': $scope.hxpadata.SaturdayOpeningTime,
            'SundayOpeningTime': $scope.hxpadata.SundayOpeningTime,
            'MondayClosingTime': $scope.hxpadata.MondayClosingTime,
            'TuesdayClosingTime': $scope.hxpadata.TuesdayClosingTime,
            'WednesdayClosingTime': $scope.hxpadata.WednesdayClosingTime,
            'ThursdayClosingTime': $scope.hxpadata.ThursdayClosingTime,
            'FridayClosingTime': $scope.hxpadata.FridayClosingTime,
            'SaturdayClosingTime': $scope.hxpadata.SaturdayClosingTime,
            'SundayClosingTime': $scope.hxpadata.SundayClosingTime
          }

          console.log(obj2)
         
            var promise = business.callserver(obj2,token);
            promise.then((data)=>{
                  console.log(data);
              },(err)=>{
                  console.log("error");
              })
         
      }

      $scope.submitform = ()=>{
        
            var obj4 = {
              "FirstName" : $scope.hxpadata.Dealer_FirstName,
              "LastName" : $scope.hxpadata.Dealer_LastName,
              "email" : $scope.hxpadata.Dealer_EmailId,
              "password" : $scope.hxpadata.Dealer_password,
              "dealer-designation" : $scope.hxpadata.Dealer_Designation,
              "dealer-contact-number" : $scope.hxpadata.Dealer_ContactNo
            };
             
            console.log(obj4);
           
              var promise = business.callserver(obj4);
              promise.then((data)=>{
                    console.log(data);
          },(err)=>{
            console.log("error");
          })
           
        }

  });
