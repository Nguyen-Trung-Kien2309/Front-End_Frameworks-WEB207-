window.ProductAddController = function($scope, $http, $location){
    var apiUrl="http://localhost:3000/products";
    // kiểm tra dữ liệu có hợp lệ hay không
    $scope.kiemTraDuLieu = {
        name: false,
        idDanhMuc:"",
        tenDanhMuc: "",
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
    $scope.onSubmit = function(){
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
            var newItem = {
                ...$scope.inputValue,
            }
            // khi thêm dữ liệu mới vào thì phải sử dụng đoạn code sau
            // bằng phương thức post
            $http.post(
                apiUrl,
                newItem
            ).then(function(response){
                if(response.status == 201){
                    $location.path('/product/list')
                    alert( "Thêm thành công" );
                }
            })
        }
    }
}