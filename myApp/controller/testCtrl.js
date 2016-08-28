angular.module('myApp').controller('testCtrl',function($scope,$state,$http){

    $scope.displayLine = function(){
        var data = {
            name: $scope.name
        };
        // console.log(data);

        $http.post('http://localhost:4004/post',data).success(function(response,data){
            console.log(data);
            console.log('response - ',response);
            $scope.disp1 = response;
        });
   }
});