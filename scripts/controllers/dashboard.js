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

    promise.then(function(data){
      console.log(data);
      $scope.dashdata = data.data;
      console.log("data is:",data.data);
    },function(err){
      console.log(err);
    })
// DashCall
    $scope.visit = ()=>{
      $window.location.assign("#business");
      $window.location.reload();
    }
  });
