var app = angular.module('myApp', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: "home.html"
        })
        .when('/portfolio', {
            templateUrl:'portfolio.html'
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);