/* ***************************************
Basic setup 
------------
Factory "userFactory" is a service that calls the web api "Save User" to save the user to the mongo database.
Review /routes/user.js -> Method doCreate.
JSON is returned with the error or the user that was saved.

Updated : 11/7/2013
Check back for updates. 
As of right now Twitter bootstrap is not included in this boiler plate stack.
I will add it in by 11/10/2013
*************************************** */


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
    getAllUsers : function(callback){
      $http.get('/users').success(callback);
    },
    saveUser : function(jsonUser, callback){
      $http.post('/user/save', jsonUser).success(callback);
    },
  }
})

/* ***************************************
**       CONTROLLERS 
**************************************** */
.controller('MainCtrl', ['$scope', '$http', 'userFactory', function ($scope, $http, userFactory) {
    $scope.name = 'Whirled';
    $scope.fullName = "Wesley Duff";
    $scope.email = "slysop@gmail.com";
    //Get All Users
    //Basic setup of API
    $scope.getAllUsers = function(){
      alert('Basic API call initialized');
      userFactory.getAllUsers(function(result){
        if(result.length && result[0].status === "error"){
          $('#errorMessage').html('Error : ' + result[0].error);
        } else {
          //TODO: NOT YET IMPLEMENTED
        }
      });
    };
    $scope.submit = function () {
      var user = {
          fullName: this.fullName,
          email: this.email,
          modifiedOn: Date.now(),
          lastLogin: Date.now()
      }
      var jsonUser = JSON.stringify(user);
      userFactory.saveUser(jsonUser, function(result){
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
}]);