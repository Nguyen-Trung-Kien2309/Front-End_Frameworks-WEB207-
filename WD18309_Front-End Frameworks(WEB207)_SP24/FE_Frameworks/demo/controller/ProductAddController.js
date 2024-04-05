window.ProductAddController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/products";
    // kiểm tra dữ liệu có hợp lệ hay không
    $scope.kiemTraDuLieu = {
        name: false,
        price: false,
    }

    $scope.onSubmit = function(){
        // gán 1 biến để kiểm tra lỗi,
        // nếu như 1 trong 2 trường lỗi thì chuyển thành true
        let flag = false;

        if(!$scope.inputValue || !$scope.inputValue.name){
            // nếu như không có inputValue hoặc inputValue.name
            $scope.kiemTraDuLieu.name = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.price){
            // nếu như không có inputValue hoặc inputValue.price
            $scope.kiemTraDuLieu.price = true;
            flag = true;
        }

        if(!flag){
            // tạo ra đối tượng item mới để thêm vào
            var newItem = {
                ...$scope.inputValue,
            }
            // thêm dữ dữ liệu mới thì phải sử dụng phương thức post
            $http.post(
                apiUrl,
                newItem
            ).then(function(response){
                if(response.status == 201){
                    $location.path('product/list')
                }
            })
        }
    }
}