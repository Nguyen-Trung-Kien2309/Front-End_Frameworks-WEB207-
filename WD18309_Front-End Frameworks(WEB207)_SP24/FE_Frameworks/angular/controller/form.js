var app = angular.module("myApp",[]);
app.controller("infoController", function($scope){
    // $scope.test = "";

    //checkbox
    // $scope.input = {
    //     danhSach: {
    //         ALL: false,
    //         A: false,
    //         B: false,
    //         C: false,
    //     },
    // },

    //select-option
    $scope.danhMuc = [
        {
            id: 1,
            name: "Nước lọc có cồn",
        },
        {
            id: 2,
            name: "Sinh tố lúa mạch",
        },
        {
            id: 3,
            name: "Apple meo meo",
        },
    ]

    $scope.submit = function(){
        //raido
        // console.log($scope.gender);

        //checkbox
        //console.log($scope.input.danhSach);

        //select-option
        //ng-options
        //console.log($scope.selectedItem.name);
        //ng-repeat
        console.log($scope.selectedItem);
    };
});