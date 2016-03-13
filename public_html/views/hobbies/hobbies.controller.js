(function(){
  
    var app = angular.module('hobbyApp');
    
    app.controller('hobbiesController', function($scope, squid){  //squid is now a global thing from the config route resolve
        
        $scope.squidPics = squid; 
        
        var picCount = 0;
        $scope.image = $scope.squidPics[picCount];
        
        $scope.cycImage = function(){
            if(picCount < $scope.squidPics.length - 1) {
                picCount++;
                $scope.image = $scope.squidPics[picCount];   
            } else {
                picCount = 0;
                $scope.image = $scope.squidPics[picCount];  
            }
        };

     
    });
    
    
}());


