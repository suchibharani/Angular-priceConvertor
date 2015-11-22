var app = angular.module('ajsCurrency',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller : 'curController',
        templateUrl: 'views/convertor.html'
    })
    .otherwise({
        redirectTo : '/'
    })
    
});