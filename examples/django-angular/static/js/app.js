app.controller('mainCtrl', ['$scope', 'PositionFactory', 'constants', function ($scope, PositionFactory, constants) {
    
    PositionFactory.getAll().then(function(res){
        
        $scope.users = [];
        res.data.results.forEach(function(item){
        	console.log(item);
        	$scope.users.push(item);
        })
        console.log($scope.users);
        return $scope;
    })
}]);

app.service('PositionFactory', ['$http', 'constants', function ($http, constants) {
    return {
        getAll: function () {
            return $http.get(constants.contestUrl);
        }
    }
}]);