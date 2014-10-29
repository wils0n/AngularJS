app.controller('mainCtrl', ['$scope', 'UserFactory', 'constants', function ($scope, UserFactory, constants) {
    
    UserFactory.getAll().then(function(res){
        
        $scope.users = [];
        res.data.results.forEach(function(item){
        	console.log(item);
        	$scope.users.push(item);
        })
        console.log($scope.users);
        return $scope;
    })
}]);

app.service('UserFactory', ['$http', 'constants', function ($http, constants) {
    return {
        getAll: function () {
            return $http.get(constants.contestUrl);
        }
    }
}]);