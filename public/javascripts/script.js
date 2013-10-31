//Build module
angular.module('app', [])


/* ***************************************
**       CONTROLLERS 
**************************************** */
.controller('Ctrl', ['$scope', 'UserService', function ($scope, UserService) {
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
        UserService.saveUser(jsonUser);
    };
}])

/* ***************************************
**       SERVICES
**************************************** */
.service('UserService', function () {
    this.saveUser = function (jsonUser) {
        $.ajax({
            contentType: 'application/json; charset=UTF-8',
            data: jsonUser,
            dateType: "json",
            error: function () {
                console.log('error with submit');
            },
            success: function () {
                alert('saved name : ' + JSON.parse(jsonUser).fullName);
            },
            url: "/user/new",
            type: "POST"
        });
    }
});
Status API Training Shop Blog About © 2013 GitHub, Inc. Terms Privacy Security Contact