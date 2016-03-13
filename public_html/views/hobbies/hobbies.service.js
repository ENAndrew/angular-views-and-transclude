(function(){
    
    var app = angular.module('hobbyApp');
    
    app.service('hobbiesService', function($q, $timeout){
        
        var photoLinks = [  //ideally this would be coming from a server elsewhere
            "http://petslady.com/files/images/squid.JPG",
            "https://upload.wikimedia.org/wikipedia/en/b/b4/Bigfin_squid_May_2001.jpg",
            "http://img-3.gizmag.com/squiddisplay.jpg?auto=format&ch=Width%2CDPR&crop=entropy&fit=crop&h=394&q=60&w=700&s=1f9a1e296b376e275f6fe429f2934bc8"
        ];

        
        
        this.getPhotos = function(){  //spoofing getting the photo references from elsewhere
          
          var deferred = $q.defer();
          
          $timeout(function(){
              
              deferred.resolve(photoLinks);
              
          }, 2000);    // spoofing a 2-second data return delay
          
          return deferred.promise;
            
        };
        
    });
    
    
    
}());


