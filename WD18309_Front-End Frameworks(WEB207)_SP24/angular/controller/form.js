var app= angular.module("myApp",[]);

    app.controller("infoController", function($scope){

// $scope.test="";
//checkbox
// $scope.input = {
//     danhsach:{
//         ALL:false,
//         A:false,
//         B:false,
//         C:false,
//     },
// };


//select -option
$scope.danhMuc=[{
    id:1,
    name:"nc locj"

},
{
    id:1,
    name:"nc co cồn"

},
{
    id:1,
    name:"App le"

}
]
$scope.submit=function(){
    //radio
    // console.log($scope.input.gender); 

    //checkbox
    // console.log($scope.input.danhsach); 


    //select options
    //ng-options
    console.log($scope.selectedItem.name); 
};
    })