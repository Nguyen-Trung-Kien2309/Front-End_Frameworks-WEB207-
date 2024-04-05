window.CategoryDetailController = function($scope,$http,$routeParams){
    var apiUrl = "http://localhost:3000/categorys";
    var id = $routeParams.id;

    $scope.getDetail = function(){
        $http.get(`${apiUrl}/${id}`).then(function(response){
            if(response.status == 200){
                $scope.p = response.data;
            }
        })
    }

    $scope.getDetail();
}