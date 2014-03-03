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
    }
  }
})
.factory('userGen', function($http){
    return {
        getUsers : function(callback){
           $http.get('http://api.randomuser.me/0.3.1/?results=15&seed=mean').success(callback);
        }
    }
})
/* ***************************************
**       CONTROLLERS 
**************************************** */
.controller('MainCtrl', ['$scope', '$http', 'userFactory', 'userGen', function ($scope, $http, userFactory, userGen) {
    var demo_getNumberOfGeneratedUsers = 30;

    $scope.init = function(){
        userGen.getUsers(function(result){
            console.dir(result);
            $scope.allGenUsers = result.results;
        });
    };
}])
.controller('UserPage', ['$scope', function($scope) {
}]);