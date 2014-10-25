(function() {
'use strict';
    var userFactoryServices = angular.module('userFactoryServices', [])
    .constant('API_URL','http://'+location.hostname+'/angular-codeigniter-seed-maste/api/account');
    
    userFactoryServices.factory('userFactory',['authTokenFactory','$http','API_URL', function userFactory(authTokenFactory,$http,API_URL) {
        return {
            login: login,
            logout: logout
        };
        
        function login(email, password) {
            alert("inside userfatory login function");
            return $http.post('api/account/login', {
              email: email,
              password: password
            }).then(function success(response) {
                console.info(response);
                alert("inside userfatory login success");
                authTokenFactory.setToken(response.data.token);
                return response;
            });
        };
        
        function logout() {
            authTokenFactory.setToken();
        }
        
    }]);
    
}());


