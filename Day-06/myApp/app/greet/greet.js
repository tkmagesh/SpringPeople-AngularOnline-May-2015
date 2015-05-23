angular.module('myApp.greet',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when("/greet",{
            controller : "greetController",
            templateUrl : "greet/greet.html"
        })
    })
    .controller("greetController", function($scope){
        $scope.name = '';
        $scope.greetMsg = '';
        $scope.greet = function(){
            $scope.greetMsg = "Hi " + $scope.name + ", Have a nice day!";
        };
    });
