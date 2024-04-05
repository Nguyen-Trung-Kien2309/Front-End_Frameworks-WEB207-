//muốn sử dụng được route trong angular js phải sử dụng code sau
angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/trang-chu',{ //định nghĩ tên route
     templateUrl:'views/trang-chu.html'// đường dẫn đến views
    });

    $routeProvider.when('/danh-muc',{ //định nghĩ tên route
     templateUrl:'views/danh-muc.html'// đường dẫn đến views
    });
    
});