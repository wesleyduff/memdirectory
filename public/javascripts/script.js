//Build module
angular.module('app', [])
/* ***************************************
**       FACTORIES
**************************************** */
.factory('userFactory', function($http){
  return {
    getUser : function(){
      return [{"user" : "wes"}];
    },
    saveUser : function(jsonUser, callback){
      $http.post('/user/save', jsonUser).success(callback);
    },
  }
})

/* ***************************************
**       CONTROLLERS 
**************************************** */
.controller('Ctrl', ['$scope', '$http', 'userFactory', function ($scope, $http, userFactory) {
    $scope.name = 'Whirled';
    $scope.fullName = "Wesley Duff";
    $scope.email = "slysop@gmail.com";
    $scope.submit = function () {
        var user = {
            fullName: this.fullName,
            email: this.email,
            modifiedOn: Date.now(),
            lastLogin: Date.now()
        }
        var jsonUser = JSON.stringify(user);
        var obj = userFactory.saveUser(jsonUser, function(result){
          if(result.status === "error"){
            $('#errorMessage').html('Error saveing user : ' + user.fullName);
          } else {
            $('#errorMessage').html('Saved User: ' + result.name);
          }
        });
    };
}])
.controller('UserPage', ['$scope', function($scope) {
	$scope.name = "User Name";
	$scope.pageName = "User Page Name";
	$scope.email = "email@email.com";
}])
.controller('projectCreate', ['$scope', function($scope){
	$scope.name = "Project Name";
	$scope.submitProjectForm = function(){
		var project = {
			name : this.name
		}
		alert(project.name);
	}
}]);