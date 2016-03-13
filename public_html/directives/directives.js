(function(){
    
    var app = angular.module('hobbyApp');
    
    app.directive('listDirective', function(){
        return {
            restrict: "EA",
            templateUrl: 'directives/list/list.html'
        };
    });
    
    app.directive('pageHeaderDirective', function(){
        return {
            restrict: "EA",
            transclude: true,
            templateUrl: 'directives/page-header/page-header.html'
        };
    });
    
    //nested directive
    app.directive('headerBar', function(){  //this is transcluded within the ng-transclude area in pageHeaderDirective
        return{
            restrict: "E",
            templateUrl: 'directives/page-header/header-bar.html'
        };
    });
    
    app.directive('colorBlock', function(){
        return {
            restrict: "E",
            templateUrl: 'directives/color-block/color-block.html',
            scope: {
                name: "@",
                action: "&"
            }
        };
    });
    
}());


