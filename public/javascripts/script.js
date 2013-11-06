//Build module
angular.module('app', [])


/* ***************************************
**       CONTROLLERS 
**************************************** */
.controller('Ctrl', ['$scope', '$http', function ($scope, $http) {
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
        $http.post('/user/save', jsonUser).success(function(data){
			if(typeof data === "object" && data.status === "error"){
				$('#errorMessage').html('Error saveing user : ' + jsonUser.fullName);
			} else if(typeof data === "object") {
				$('#errorMessage').html('Saved User: ' + data.name);
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
}])
/* ***************************************
**       SERVICES
NOTE * this worked and saved but did not return the JSON
**************************************** */
.service('UserService', function () {
    this.saveUser = function (jsonUser) {
		$http.post('/user/save', jsonUser).success(function(data){
			return data;
		});
	}
   //.ajax({
   //       contentType: 'application/json; charset=UTF-8',
   //       data: jsonUser,
   //       dateType: "json",
   //       error: function () {
   //           console.log('error with submit');
   //       },
   //       success: function (data) {
   //   		console.dir(data);
   //   		if(typeof data === "object" || data.length > 0){
   //   			return data;
   //   		}
   //       },
   //       url: "/user/save",
   //       type: "POST"
   //   });
   //
});