'use strict';

angular.module('acs', ['acs.filters', 'acs.services', 'acs.directives', 'acs.controllers', 'ngRoute', 'ui.bootstrap']).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $routeProvider.when('/home', {
        controller: 'home',
        templateUrl: 'partials/home.html'
    });

    $routeProvider.when('/about', {
        controller: 'about',
        templateUrl: 'partials/about.html'
    });

    $routeProvider.when('/login', {
        controller: 'login',
        templateUrl: 'partials/login.html'
    });

    $routeProvider.when('/register', {
        controller: 'register',
        templateUrl: 'partials/register.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var param = function(obj) {
        var query = '',
            name, value, fullSubName, subName, subValue, innerObj, i;
        alert("here inside applicationJS file");
        console.info(obj);
        for (name in obj) 
        {
            value = obj[name];
            
            console.info(value);
            
            if (value instanceof Array) 
            {
                console.info("value instance of arry");
                
                for (i = 0; i < value.length; ++i) 
                {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) 
            {
                console.info("value instance of object");
                for (subName in value) 
                {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null) 
            {
                console.info("value not instance of object and array");
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                
                console.info(query);
            }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $httpProvider.defaults.transformRequest = [function(data) {
        console.info(data);
        if(angular.isObject(data) && String(data) !== '[object File]')
        {
            alert("not equal to")
        }
        else
        {
            alert("equal to");
        }    
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
    
}]);
