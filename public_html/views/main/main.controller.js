(function(){
    
    var app = angular.module('hobbyApp');
    
    app.controller('mainController', function($scope){
        
        $scope.name = "Purple";
        
        $scope.alertSomething = function(){
            alert("You Clicked");
        };
        
    });
    
}());


