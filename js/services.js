(function() {
'use strict';

    var tokenServices = angular.module('acs.services', []);

    tokenServices.factory('auth',function() {
        var user = {};
        return {
            user: function() {
                return user;
            }
        };
    });

    tokenServices.factory('authTokenFactory',['$window', function($window) {
        var store = $window.localStorage;
        
        var key = 'auth-token';
        return {
            getToken: getToken,
            setToken: setToken
        };
        
        function getToken(){
            return store.getItem(key);
        };
        function setToken(token){
            if(token)
            {
                store.setItem(key,token);
                
            }
            else
            {
                store.removeItem(key);
            }    
        };
        
    }]);
    tokenServices.factory('authInterceptor',['authTokenFactory',function(authTokenFactory) {
        alert("on every http request");
        
        return {
            request: addToken,
        };
        
        function addToken(config){
            var token = authTokenFactory.getToken();
            
            if(token)
            {
               config.headers = config.headers ||  {};
               config.headers.Authorization = 'Bearer ' + token; 
            } 
            
            return config;
        };
        
    }]);

}());