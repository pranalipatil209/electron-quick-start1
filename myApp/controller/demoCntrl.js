angular.module("myApp").controller("demoCntrl", function($scope, $state) {
    $scope.disp="its a ELECTRON...."
    $scope.show=function(){
        console.log('U good!!');
        alert('its working');
        $state.go('test');
    }
});