angular.module('myController',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{
        templateUrl: 'views/list.html',
        controller: ProductListController
    })
    .when('/product/add',{
        templateUrl: 'views/add.html',
        controller: ProductAddController
    })
    .when('/product/detail/:id',{
        templateUrl: 'views/detail.html',
        controller: ProductDetailController
    })
    .when('/product/:id/edit',{
        templateUrl: 'views/edit.html',
        controller: ProductEditController
    })
    .when('/product/trangchu',{
        templateUrl: 'views/trangchu.html',
        controller: ProductEditController
    }).when('/category/list',{
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