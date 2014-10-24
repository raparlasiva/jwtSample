'use strict';

var controllers = angular.module('acs.controllers', []);
// -- navigation controller ---///
controllers.controller('navigation', ['$scope', '$location', 'auth','authTokenFactory','authInterceptor',
    function($scope, $location, auth) {
    
    alert("navigation");
    
    $scope.user = auth.user;

    $scope.active = function(path) {
        return path === $location.path();
    };
    
    $scope.logout = function() {
        auth.user   = {};
        $scope.user = auth.user;
        //$scope.user = {};
        $location.path('home');
    };

}]);
// ---login controller ----///
controllers.controller('login', ['$scope', '$location', '$http', 'auth','authTokenFactory','authInterceptor',
    function($scope, $location, $http, auth,authTokenFactory) {

    $scope.input = {};

    $scope.login = function() {
        $http.post('api/account/login', {
            email: $scope.input.email,
            password: $scope.input.password
        }).success(function(data) {
            if (data.status) 
            {
                $scope.user = auth.user;
                $scope.user.email = data.email;
                $scope.user.token = data.token;
                authTokenFactory.setToken(data.token);
                $location.path('home');
                
            } 
            else 
            {
                
            }
        });
    };

}]);
// -- register controller ----///
controllers.controller('register', ['$scope', '$location', '$http','authTokenFactory','authInterceptor', 
    function($scope, $location, $http,authTokenFactory,authInterceptor) {

    $scope.input = {};

    $scope.register = function() {
        $http.post('api/account/register', {
            email: $scope.input.email,
            password: $scope.input.password
        }).success(function(data) {
            if (data.status) 
            {
                $location.path('login');
            } 
            else 
            {
                
            }
        });
    };

}]);
// ---home controller ----
controllers.controller('home', ['$scope', '$location', '$http', 'auth','authTokenFactory','authInterceptor', 
    function($scope, $location, $http, auth,authTokenFactory,authInterceptor) {
    alert("inside home ctrl");
    console.info(auth);
    $scope.user = auth.user;
    
    $scope.information = function() {
        $http.post('api/account/information', {
            token: $scope.user.token
        }).success(function(data) {
            if (data.status) 
            {
                alert(data.message);
            } 
            else 
            {
                
            }
        });
    };

}]);
//----- about controller----
controllers.controller('about', ['$scope', '$location', '$http', 'auth','authTokenFactory','authInterceptor',
    function($scope, $location, $http, auth) {
    alert("inside about ctrl");
    console.info(auth);
   

}]);
