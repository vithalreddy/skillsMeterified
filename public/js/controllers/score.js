angular.module('MyApp')
  .controller('testResultCtrl', function($scope, $interval, $rootScope, $location, $route,  $routeParams, $window, $auth,Account, TestsApi) {
    $scope.profile = $rootScope.currentUser;
    $scope.testid = $routeParams.testid;
    console.log($routeParams.testid);
    $scope.totalCorrect = 0;
    $scope.totalWrong = 0;
    $scope.timeTakenTotal = 0;
    $scope.timeTakenTotalX = 0;


    //get  single test answers start
    $scope.getSingleTestAnswer = function() {
      $scope.testid = $routeParams.testid;
      console.log("test id----- "+$scope.testid);
      TestsApi.getSingleTestAnswers($scope.testid)
        .then(function(response) {
          console.log(response.data);
          $scope.answers = response.data;
          // to find result of all questions
          $scope.answers.forEach(trueOrFalse)
          function trueOrFalse(answer, index) {
          if (answer.correctAnswer == answer.userAnswer) {
            $scope.totalCorrect++;
            console.log("total correct---- "+$scope.totalCorrect);
          }else {
            $scope.totalWrong++;
            console.log("total wrong---- "+$scope.totalWrong);
          }
        };
        $scope.answers.forEach(timeTakenCalculate);
        function timeTakenCalculate(answer, index) {
          $scope.timeTakenTotalX =  $scope.timeTakenTotalX+answer.timeTakenEach;
          $scope.timeTakenTotal = Math.floor(  $scope.timeTakenTotalX / 60) + ":" + (  $scope.timeTakenTotalX % 60 ?   $scope.timeTakenTotalX % 60 : '00');

      };


        })
        .catch(function(response) {
          console.log("error");
          alert("Error!!!!, For More Info, Check Your Browser's Console")
          console.log(response);
        });
    };
    //view single test answers end
    $scope.getSingleTestAnswer();

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
      alert("error, check console!")
      console.log("error");
      console.log(response);
    });
};
//view single test end
$scope.viewSingleTest();

  });
