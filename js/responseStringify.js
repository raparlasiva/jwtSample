(function() {
'use strict';

var responseStringfyService = angular.module('responseStringfyService',[]);

responseStringfyService.factory('responseStringifySvc', [
    function(){
        var stringifyProperty= function(property) {
                if(property== null) 
                {
                    return "";
                } 
                else 
                {
                    return property.toString();
                }
        };
        return {
                stringifyResponseData: function(responseObject) {
                    angular.forEach(responseObject, function(value, key) {

                        responseObject[key]=stringifyProperty(responseObject[key]);
 
                    });

                    return responseObject;
                }
            
        };
    }
]);
}());

