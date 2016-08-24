angular.module('myApp').controller('testCtrl',function($scope,$state){

    $scope.displayLine = function(){
        var data = $scope.line1;
        console.log(data);
       $scope.disp1 = data;
   }
});