'use strict';

/**
 * @ngdoc service
 * @name halanxApp.registerotp
 * @description
 * # registerotp
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('registerotp', function ($http,$q) {
        var object =  {
		
		
        callserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "https://api.halanx.com/users/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data.data);
					 
					console.log(data.data); 
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
