'use strict';

/**
 * @ngdoc function
 * @name halanxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the halanxApp
 */
angular.module('halanxApp')
  .controller('DashboardCtrl', function ($scope,dashboard,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var token = localStorage.getItem("store_token");
    var promise = dashboard.DashCall(token);

    $scope.dashdata = [];
    $scope.payment = [];
    promise.then(function(data){
      console.log(data);
      $scope.paid = data.data.paid;
      $scope.pending = data.data.pending;
      localStorage.setItem("paid_amount",data.data.paid);
      localStorage.setItem("pending_amount",data.data.pending);
      $scope.dashdata = data.data.items;
      console.log("data is:",data.data.items);
    },function(err){
      console.log(err);
    })
// DashCall
    $scope.visit = ()=>{
      $window.location.assign("#business");
      $window.location.reload();
    }

    $scope.openMe = ()=>{
      // dashboard.PaymentCall(token).then((data)=>{
      //   $scope.payment = data.data;
      //   console.log(data.data);
        
      // })
      for(var i=0;i<20;i++){
      $scope.payment.push({id: i, amount: 1000*i, paid_on: "2018-01-11T12:30:00Z", store: 78});
      }
    }
  });
