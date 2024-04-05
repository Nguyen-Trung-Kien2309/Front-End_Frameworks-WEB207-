//muốn sử dụng được route trong angular js phải sử dụng code sau
angular.module('myController',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{ //định nghĩ tên route
     templateUrl:'views/list.html',// đường dẫn đến views
     controller:ProductListController
    });

  
    
});