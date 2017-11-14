'use strict';

/**
 * @ngdoc service
 * @name halanxApp.forgetpassnew
 * @description
 * # forgetpassnew
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('forgetpassnew', function ($http, $q) {
       var object = {


        callserver: function (obj) {
            console.log(obj)
            var pr = $q.defer();
            var url = "https://api.halanx.com/rest-auth/password/change/";
            console.log(obj);
            $http.post(url, obj).then(function (data) {
                pr.resolve(data.data);


            }
                , function (err) {
                    pr.reject(err);
                    console.log(" Error");
                });
            return pr.promise;
        }


    }
    return object;
  });
