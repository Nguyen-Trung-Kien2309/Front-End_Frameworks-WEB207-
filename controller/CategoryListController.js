window.CategoryListController = function($scope, $http, $location){
    
    // tạo đường dẫn apiUrl để nó gọi được API
    var apiUrl = "http://localhost:3000/categorys";
    $scope.getData = function(){
        // gọi để lấy data
        $http.get(apiUrl).then(function(response){
            // nếu như reponse trả về dữ liệu thành công
            if(response.status == 200){
                // tạo ra 1 biến products để hứng dữ liệu
                // từ phía json-server trả về
                $scope.products = response.data;
            }
        })
    }
    $scope.getData();

    // xóa
    $scope.onDelete = function(deleteID){
        let confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        // nếu như confirm ok tức là đồng ý xóa
        if(confirm){
            $http.delete(`${apiUrl}/${deleteID}`).then(
                function(response){
                    if(response.status == 200){
                        $scope.getData();
                    }
                }
            )
        }
    }

    $scope.onDetail = function(id){
        $location.path(`/category/detail/${id}`)
    }

    $scope.onEdit = function(id){
        $location.path(`category/${id}/edit`)
    }
}