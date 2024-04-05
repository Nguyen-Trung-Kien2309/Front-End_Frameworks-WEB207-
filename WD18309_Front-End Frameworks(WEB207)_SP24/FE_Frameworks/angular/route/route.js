angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/trang-chu',{ // định nghĩa tên route
        templateUrl : 'views/trang-chu.html' // đường dẫn đến views
    })
    .when('/danh-muc',{ 
        templateUrl : 'views/danh-muc.html'
    })
});