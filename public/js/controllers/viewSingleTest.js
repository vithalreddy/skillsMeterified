angular.module('MyApp')
  .controller('viewSingleTestCtrl', function($scope, $rootScope, $location, $route, $routeParams, $window, $auth, Account, TestsApi) {
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
//view single test start
$scope.viewSingleTest = function() {
  $scope.testid = $routeParams.testid;
  console.log($scope.testid);
  TestsApi.viewSingleTest($scope.testid)
    .then(function(response) {
      //console.log(response.data);
      $scope.test = response.data.data;
    })
    .catch(function(response) {
      console.log("error");
      $scope.messages = {
        error: Array.isArray(response.data) ? response.data : [response.data]
      };
    });
};
//view single test end
$scope.viewSingleTest();

//get questions from specific test
$scope.getSingleTestQuestions = function() {
  $scope.testid = $routeParams.testid;
  console.log($scope.testid);
  TestsApi.getSingleTestQuestions($scope.testid)
    .then(function(response) {
      //console.log(response.data);
      $scope.questions = response.data.data;
    })
    .catch(function(response) {
      console.log("error");
      $scope.messages = {
        error: Array.isArray(response.data) ? response.data : [response.data]
      };
    });
};
//view single test end
$scope.getSingleTestQuestions();

//delete test
$scope.deleteSingleTest = function() {
  if ($scope.profile.email == "vmreddyvmb@gmail.com") {
  $scope.testid = $routeParams.testid;
  console.log($scope.testid);
  TestsApi.deleteSingleTest($scope.testid)
    .then(function(response) {
      console.log(response.data);
      alert("Test Deleted Successfully")
      //$scope.questions = response.data.data;
      $location.path( "/dashboard" );
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
//delete single test end

//addQuestion start
$scope.addAnQuestion = function() {
  if ($scope.profile.email == "vmreddyvmb@gmail.com") {
  console.log($scope.testid);
  TestsApi.addQuestion($scope.question, $scope.testid)
    .then(function(response) {
      //console.log(response.data);
      // console.log("reached create test"+ response.data.message);
      $scope.messages = {
        success: [response.data]
      };

      if (response.data.error === false) {
        alert("Question Added Successfully");
        $route.reload();
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
//addQuestion end

//update test start
$scope.updateTest = function() {
  if ($scope.profile.email == "vmreddyvmb@gmail.com") {
  console.log($scope.testid +", to update test");
  TestsApi.editSingleTest($scope.testid, $scope.test)
    .then(function(response) {
      console.log(response.data.data);
      // console.log("reached create test"+ response.data.message);
      $scope.messages = {
        success: [response.data]
      };
      if (response.data.error === false) {
        alert("Test Updated Successfully");
        $route.reload();
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
//update test end

  });
