'use strict';

/**
 * @ngdoc function
 * @name halanxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the halanxApp
 */
angular.module('halanxApp')
  .controller('DashboardCtrl', function ($scope,dashboard) {
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
      console.log(data);
    },function(err){
      console.log(err);
    })
// DashCall
    
  });
