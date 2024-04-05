window.ProductListController = function ($scope, $http, $location){

    var apiUrl ="http://localhost:3000/products";  // application url to make http requests
    /* Function to get all products from the server */
    $scope.getData=function(){
        $http.get(apiUrl).then(function(response) {  	// data is a json object which contains list of products
     if(response.status==200) {
       $scope.products=response.data ;
     }
})
    }
 $scope.getData();
}
 // nut xoa
 $scope.onDelete = function(deleteID){
    let confirm = window.confirm("ban co muon xoa khong");
    if(confirm){
        $http.delete(`${apiUrl}/${deleteID}`).then(
            function(response){
                if(response.status==200){
                    $scope.getData();
                }
            }
        )
    }
 
}