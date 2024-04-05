window.ProductAddController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/products";
    $scope.kiemTradata = {
        name: false,
        price: false,
    }
    $scope.onSubmit = function () {
        let flag = false;
        if (!$scope.inputValue || !$scope.inputValue.name) {
            $scope.kiemTradata.name = true;
            flag = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.price) {
            $scope.kiemTradata.price = true;
            flag = true;
        }
        if (!flag) {
            var newItem = {
                ...$scope.inputValue,
            }
            $http.post(apiUrl, newItem).then(function (response) {
                if (response.status == 201) {

                    $location.path("product/list")
                }

            })
        }
    }
}