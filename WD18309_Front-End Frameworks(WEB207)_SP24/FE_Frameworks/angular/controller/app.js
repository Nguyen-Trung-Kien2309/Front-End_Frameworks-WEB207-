// viết hàm
// function myFunc($scope) {// luôn luôn truyền vào tham số $scope
//     $scope.welcome = "Hello World";
//     // đằng sau $scope. là biến thành mình khởi tạo
//     // để render ra view
// }

// khai báo angular js cùng với vùng mà mình sử dụng
var app = angular.module("myApp", []);
// map hàm myFunc với cùng infoController để
// render dữ liệu
app.controller("infoController", function($scope){
    // $scope.welcome = "Hello World";
    // $scope.maSV = "PH12345";
    // $scope.tenSV = "Nguyễn Văn A";
    // $scope.namSinh = 2004;


    // đối tượng là gì?
    // đối tượng là tập hợp của thuộc tính và phương thức
    // có thể là người, sự vật
    // ví dụ: con người, ô tô, bàn ghế,....
    // thuộc tính là các đặc điểm của đối tượng
    // ví dụ: tên, màu sắc, ....

    // $scope.tên đối tượng = {}
    // $scope.sinhVien = {
    //     maSV: "PH98765",
    //     tenSV: "Nguyễn Văn B",
    //     namSinh: 2003
    // }
    // $scope.namHienTai = 2024;

    //mảng là gì?
    // mảng là tập hợp của nhiều đối tượng 
    // có cùng thuộc tính và phương thức

    // $scope.tên mảng = []
    // bên trong [] là các cặp ngoặc {}
    // mỗi cặp ngoặc {} hiểu đơn giản là 1 đối tượng
    // các đối tượng được ngăn cách nhau bởi dấu ,
    $scope.sinhvien = [
        {
            maSV: "PH12345",
            tenSV: "Nguyễn Văn B",
            namSinh: 2002,
        },
        {
            maSV: "PH14725",
            tenSV: "Nguyễn Văn C",
            namSinh: 2004,
        },
    ] 
})