
    // function myFunc($scope){ // luôn luôn có tham sôd scope
    //     $scope.wellcome ="Hello Word";
       
    //     $scope.email ="kienntph44041@fpt.edu.vn";
    //     // đằng sao $saope. là biến khởi tâoj
    //     // để render ra view
    // }
    // khai báo angular js cùng với vùng mà mk sd
    var app= angular.module("myApp",[]);
    // map hamf myfun vs vùng ìnoController để
    // render data

    app.controller("infoController", function($scope){

        // $scope.wellcome ="Hello Word";
       
        // $scope.email ="kienntph44041@fpt.edu.vn";

// đối tượng là tập hợp các thuộc  tính và phương thức của 1 cá nhân , cá thể
        // Thuộc tính: là đ cấu tạo lên đói ttuond
        //vd màu sắc kích thu
        // Phương thức :hd của đối tg
        
//         $scope.sinhVien={
//             name:"KIEN NGUYEN",
//             namSinh:2007,
           
//             address:"Hồ Chí Minh"
//         }
// $scope.namhientai = 2024;


// mang  chứa đối tượng sinh viên
        $scope.sinhVien=[
            {maSv:"ph44041"
            ,name:"Nguyễn Văn A",
            namSinh:1995},
            {maSv:"ph44043"
            ,name:"Trần Văn B",
            namSinh:1996}
        ];
        
    });
