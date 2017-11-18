'use strict';

/**
 * @ngdoc service
 * @name halanxApp.shopper
 * @description
 * # shopper
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('shopper', function ($http,$q) {
    var object =  {
        callserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "https://api.halanx.com/shoppers/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data.data);
					console.log("Data Posted",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
				}
				}
    return object;
  });
