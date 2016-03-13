(function(){
    
    var app = angular.module('hobbyApp', ['ui.router']);
    
   
    app.config(function($urlRouterProvider, $stateProvider){
        
        $stateProvider 
                .state('home', {
                    url: '/'
        })
                .state('main', {
                    url: '/main',
                    templateUrl: 'views/main/main.view.html',
                    controller: 'mainController'
        })
                .state('hobbies', {
                    url: '/hobbies',
                    templateUrl: 'views/hobbies/hobbies.html',
                    controller: 'hobbiesController',
                    resolve: {
                        squid: function(hobbiesService) {  //squid now represents the response and is available to controllers
                            return hobbiesService.getPhotos();  //this view is now delayed 2 seconds until getPhotos completes
                        }
                    }
        })
                .state('personal-info', {
                    url: '/personal-info',
                    templateUrl: 'views/personal-info/personal-info.html'
        });
        
        
        $urlRouterProvider.otherwise('/');
        
        
        
    });
    
    
    
}());

