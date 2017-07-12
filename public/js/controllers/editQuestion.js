angular.module('MyApp')
  .controller('editSingleTestCtrl', function($scope, $rootScope, $location, $route, $routeParams, $window, $auth, Account, TestsApi) {
    $scope.profile = $rootScope.currentUser;
    // checking if user is admin
    (() => {
  if ($scope.profile.email == "vmreddyvmb@gmail.com" ) {
    console.log("admin logged in");
  }else {
    alert("You're Not Authorized To View This Page")
    $location.path( "/dashboard" );
  }
})();

    $scope.getSingleQuestion = function() {
      $scope.questionid = $routeParams.questionid;
      console.log($scope.questionid);
      TestsApi.getSingleQuestion($scope.questionid)
        .then(function(response) {
          //console.log(response.data);
          $scope.question = response.data.data;
        })
        .catch(function(response) {
          console.log("error");
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
      }
      $scope.getSingleQuestion();

//update question start
$scope.updateQuestion = function() {
  if ($scope.profile.email == "vmreddyvmb@gmail.com") {
  console.log($scope.questionid +", to update test");
  TestsApi.editSingleQuestion($scope.questionid, $scope.question)
    .then(function(response) {
      console.log(response.data);
      // console.log("reached create test"+ response.data.message);
      $scope.messages = {
        success: [response.data]
      };
      if (response.data.error === false) {
        alert("Question Updated Successfully");
        $window.history.go(-1);
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
//update question end

//question delete
$scope.deleteSingleQuestion = function() {
  if ($scope.profile.email == "vmreddyvmb@gmail.com") {
  $scope.questionid = $routeParams.questionid;
  console.log($scope.questionid);
  TestsApi.deleteSingleQuestion($scope.questionid)
    .then(function(response) {
      console.log(response.data);
      alert("Question Deleted Successfully")
      $window.history.go(-1);

    })
    .catch(function(response) {
      console.log("error");
      $scope.messages = {
        error: Array.isArray(response.data) ? response.data : [response.data]
      };
    });
  } else {
    alert("You're Not Authorized To View This Page")
    $location.path( "/dashboard" );
  }
};
//delete single question end
  });
