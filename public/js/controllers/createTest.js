angular.module('MyApp')
  .controller('createTestCtrl', function($scope, $rootScope, $location, $route, $routeParams, $window, $auth, Account, TestsApi) {
    $scope.profile = $rootScope.currentUser;
    $scope.adminCheck = function(){
      if ($scope.profile.email == "vmreddyvmb@gmail.com") {}else{
        alert("You're Not Authorized To View This Page")
        $location.path( "/dashboard" );
      }
    };
    $scope.adminCheck();
    //createTest start
    $scope.createTest = function() {
      if ($scope.profile.email == "vmreddyvmb@gmail.com") {
      TestsApi.createTest($scope.test)
        .then(function(response) {
          //console.log(response.data);
          // console.log("reached create test"+ response.data.message);
          $scope.messages = {
            success: [response.data]
          };
          if (response.data.error === false) {
            //console.log(response.data.data._id);
              $location.path('/viewtest/'+response.data.data._id);
              console.log("no error");
          }
        })
        .catch(function(response) {
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
      } else {
        alert("You're Not Authorized To View This Page")
        $location.path( "/dashboard" );
      }
    };
//createTest end

  });
