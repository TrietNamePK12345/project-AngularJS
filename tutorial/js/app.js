var myApp = angular.module('myApp', []);

myApp.controller('HomeController', ['$scope', function($scope){

    $scope.user = [
        {
            name: 'Nguyen Van A',
            age: '20 years',
            class: '12A'
        },

        {
            name: 'Nguyen Van B',
            age: '20 years',
            class: '12B'
        },

        {
            name: 'Nguyen Van C',
            age: '20 years',
            class: '12C'
        }
    ];
    
    $scope.list = [];
    $scope.text = 'Something';
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text = '';
          }
    }

}]);