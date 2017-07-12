angular.module('MyApp')
  .controller('dashboardCtrl', function($scope, $rootScope, $location, $route,  $routeParams, $window, $auth,Account, TestsApi) {
    $scope.profile = $rootScope.currentUser;
    $scope.ifAttempted;
    $scope.notAttempted;
    //$window.location.reload();

    //get  single test answers start
    $scope.getAllTests = function() {
      TestsApi.getAllTests()
        .then(function(response) {
          //console.log(response.data);
          $scope.tests = response.data.data;
          console.log($scope.tests)

        })
        .catch(function(response) {
          console.log("error");
          alert("Error!!!!, For More Info, Check Your Browser's Console")
          console.log(response);
        });
    };
    //view single test answers end
    $scope.getAllTests();


    // $scope.checkUserReset = function(testid){
    //       $scope.ifAttempted = null;
    //       $scope.notAttempted = true;
    //       console.log("checkUserReset");
    //       window.clearTimeout($scope.timeoutHandle);
    // }

    //es6 immediately invoked function
    $scope.checkUser = function(testid){
          $scope.ifAttempted = null;
          $scope.notAttempted = true;
      TestsApi.viewSingleTest(testid)
        .then(function(response) {
          $scope.testX = response.data.data;
          $scope.notAttempted = true;
          //console.log($scope.testX);
          $scope.testAttemptedByAll = $scope.testX.testAttemptedBy;
          //console.log($scope.testAttemptedByAll);
          $scope.testAttemptedByAll.forEach(function(id) {
            if (id  == $scope.profile._id ) {
                console.log("user found");
                $scope.ifAttempted = true;
                console.log($scope.ifAttempted);
                $scope.notAttempted = false;
                //console.log($scope.ifAttempted);
                alert('You Already Attempted This Test, You Can View Your Results');
                //window.location = "/live-test/scorecard/"+$scope.testid
            }
            // $scope.timeoutHandle  = window.setTimeout(function(){
            //   $scope.ifAttempted = null;
            //   $scope.notAttempted = true;
            //   console.log("user check reset");
            //   //alert("time out!, Please Choose Again")
            // }, 5000);
          });

        })
        .catch(function(response) {
          alert("error, check console!")
          console.log("error");
          console.log(response);
        });
    };




  });
