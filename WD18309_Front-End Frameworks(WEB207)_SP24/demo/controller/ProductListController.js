window.ProductListController = function ($scope, $http, $location) {

    // tạo đường dẫn apiUrl để nó gọi được API
    var apiUrl = "http://localhost:3000/products";
    $scope.getData = function () {
        // gọi để lấy data
        $http.get(apiUrl).then(function (response) {
            // nếu như reponse trả về dữ liệu thành công
            if (response.status == 200) {
                // tạo ra 1 biến products để hứng dữ liệu
                // từ phía json-server trả về
                $scope.products = response.data;
            }
        })
    }
    $scope.getData();

    // nút xóa
    $scope.onDelete = function (deleteID) {
        let confirm = window.confirm("Bạn có muốn xóa không?");
        if (confirm) {
            $http.delete(`${apiUrl}/${deleteID}`).then(
                function (reponse) {
                    if (reponse.status == 200) {
                        // gọi lại hàm getData để cập nhật lại bảng
                        $scope.getData();
                    }
                }
            )
        }
    }
    $scope.onDetail = function (id) {
        $location.path(`/product/detail/${id}`)
    }
    $scope.onEdit = function (id) {
        $location.path(`/product/${id}/edit`)
    }
}