angular.module('myController',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/category/list',{
        templateUrl: 'views/categorylist.html',
        controller: CategoryListController
    })
    .when('/category/add',{
        templateUrl: 'views/categoryadd.html',
        controller: CategoryAddController
    })
    .when('/category/detail/:id',{
        templateUrl: 'views/categorydetail.html',
        controller: CategoryDetailController
    })
    .when('/category/:id/edit',{
        templateUrl: 'views/categoryedit.html',
        controller: CategoryEditController
    })
});