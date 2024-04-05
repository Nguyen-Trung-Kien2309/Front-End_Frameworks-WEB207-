window.ProductEditController = function($scope,$http,$routeParams,$location){
    var apiUrl = "http://localhost:3000/products";
    var editId = $routeParams.id;

    $scope.getProductInfo = function(){
        $http.get(`${apiUrl}/${editId}`).then(
            function(response){
                if(response.status == 200){
                    $scope.product = response.data;
                    $scope.inputValue = {
                        name: response.data.name,
                        idDanhMuc: response.data.idDanhMuc,
                        tenDanhMuc: response.data.tenDanhMuc,
                        age: response.data.age,
                        gender: response.data.gender,
                        salary: response.data.salary,
                    }
                }
            }
        ).catch(function(error){
            $scope.message = `${error.statusText} product with id ${editId}`;
        })
    }
    $scope.getProductInfo();

    $scope.kiemTraDuLieu = {
        name: false,
        idDanhMuc:false,
        tenDanhMuc: false,
        age: false,
        gender:false,
        salary: false
    }
    $scope.danhMucs = [];
    // Call api lấy danh sách danh mục
    $http({
     method: 'GET',
     url: "http://localhost:3000/categorys"
 }).then(function (response) {
     $scope.danhMucs = response.data;
     console.log($scope.danhMucs);
 })
    $scope.onEditForm = function(){
        // gán 1 biến kiểm tra lỗi
        // nếu 1 trong 2 trường lỗi thì cập nhật thành true
        let flag = false;
        if(!$scope.inputValue || !$scope.inputValue.name){
            // nếu không có inputValue hoặc inputValue.name
            // thì lập tức chuyển thành true
            $scope.kiemTraDuLieu.name= true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.age){
            // nếu không có inputValue hoặc inputValue.price
            // thì lập tức chuyển thành true
            $scope.kiemTraDuLieu.age= true;
            flag = true;
        
        }if(!$scope.inputValue || !$scope.inputValue.gender){
            // nếu không có inputValue hoặc inputValue.price
            // thì lập tức chuyển thành true
            $scope.kiemTraDuLieu.gender= true;
            flag = true;
        }if(!$scope.inputValue || !$scope.inputValue.salary){
            // nếu không có inputValue hoặc inputValue.price
            // thì lập tức chuyển thành true
            $scope.kiemTraDuLieu.salary= true;
            flag = true;
        }
        for (var i = 0; i < $scope.danhMucs.length; i++) {
            console.log($scope.danhMucs[i]);
            if ($scope.danhMucs[i].id == $scope.inputValue.idDanhMuc) {
               $scope.inputValue.tenDanhMuc = $scope.danhMucs[i].name;
            }
   
       }
        if(!flag){
            // tạo ra đối tượng item để thêm vào
            var updateItem = {
                ...$scope.inputValue,
            }
            // khi thêm dữ liệu mới vào thì phải sử dụng đoạn code sau
            // bằng phương thức post
            $http.put(
                `${apiUrl}/${editId}`,
                updateItem
            ).then(function(response){
                if(response.status == 200){
                    $location.path('/product/list')
                    alert( "Sửa thành công" );
                }
            })
        }
    }
}