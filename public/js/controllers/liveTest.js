angular.module('MyApp')
  .controller('liveTestCtrl', function($scope, $interval , $rootScope, $location, $route,  $routeParams, $window, $auth,Account, TestsApi) {
    $scope.profile = $rootScope.currentUser;
    $scope.testid = $routeParams.testid;
    $scope.qLength = 0;
    


    //get questions from specific test
    $scope.getSingleTestQuestions = function() {
      //$scope.testid = $routeParams.testid;
      console.log("test id----- "+$scope.testid);
      TestsApi.getSingleTestQuestions($scope.testid)
        .then(function(response) {
          //console.log(response.data);
          $scope.questions = response.data.data;
          console.log($scope.questions);
          $scope.qLength = $scope.questions.length;
          console.log("no of questions ---"+ $scope.qLength);
          $scope.qIndex = 0;
          $scope.qTime = 0;



          // timer logic start
          // store the interval promise in this variable

                          $scope.incIndex = function(){
                            $scope.qIndex++;
                            $scope.start();
                          }
                        var promise;
                        var qTimeTaken;
                        // starts the interval
                          $scope.start = function() {
                          // stops any running interval to avoid two intervals running at the same time
                          $scope.stop();
                          // store the interval promise
                          promise = $interval(setRandomizedCollection, 10000);
                          qTimeTaken = $interval(incrementSeconds, 1000);
                        };
                        // stops the interval
                          $scope.stop = function() {
                          $interval.cancel(promise);
                          $interval.cancel(qTimeTaken);
                        };
                        // starting the interval by default
                        $scope.start();

                        // stops the interval when the scope is destroyed,
                        // this usually happens when a route is changed and
                        // the ItemsController $scope gets destroyed. The
                        // destruction of the ItemsController scope does not
                        // guarantee the stopping of any intervals, you must
                        // be responsible for stopping it when the scope is
                        // is destroyed.
                        $scope.$on('$destroy', function() {
                          $scope.stop();
                        });
                        function incrementSeconds() { $scope.qTime += 1; }

                        function setRandomizedCollection() {
                          console.log($scope.qLength);
                          if ($scope.qIndex+1 <= $scope.qLength) {
                            $scope.storeSolution("noAnswer", $scope.questions[$scope.qIndex]._id, $scope.profile._id, $scope.testid, $scope.questions[$scope.qIndex].answer)
                            //console.log($scope.storeSolution(null, $scope.questions[$scope.qIndex].question, $scope.profile._id, $scope.testid));
                          }
                          if ($scope.qIndex+1 > $scope.qLength ) {

                            console.log($scope.qIndex ,  $scope.qLength);
                            window.location = "/live-test/scorecard/"+$scope.testid

                            //alert("thanks, now let's see how you performed!!!")
                            $scope.stop();

                          } else {
                            $scope.qIndex++;
                            console.log($scope.qIndex);
                          }

                        }


          // timer logic stop

        })
        .catch(function(response) {
          console.log("error");
          alert("Error!!!!, For More Info, Check Your Browser's Console")
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };
    //view single test end
    $scope.getSingleTestQuestions();





    //store solution to db start
    $scope.storeSolution = function(option, questionid, profileid, testid, answer) {

      console.log(questionid);
      $scope.questionid = questionid
      console.log("**************");
      console.log($scope.profile._id);
      console.log("**************");
      console.log($scope.testid);
      console.log("**************");
      console.log("user--"+option);
      console.log("admin--"+answer);

      $scope.option = option;
      var data = {
        timeTakenEach: $scope.qTime,
        userAnswer: option,
        correctAnswer: answer

      }
      console.log("time taken to answer----  "+$scope.qTime);
      TestsApi.sendSolution(questionid, testid, data)
        .then(function(response) {
          //console.log(response.data);
          console.log(response);
        })
        .catch(function(response) {
          console.log(JSON.stringify(response));
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
        $scope.qTime = null;
      };
    //store solution to db end

    // to add test attempted by user  start
    //update test start
$scope.updateTest = function() {
  var data = {
    testAttemptedBy: $scope.profile._id
  }
  if ($scope.profile.email) {
  console.log($scope.testid +", to update test");
  TestsApi.testAttemptedBySend($scope.testid, data)
    .then(function(response) {
      console.log(response.data);
      console.log("added user test attempt to db");
    })
    .catch(function(response) {
      alert('error, check console for more info!')
      console.log(response);
    });
  } else {
    alert("You're Not Authorized To View This Page")
    $location.path( "/dashboard" );
  }
};
//update test end
$scope.updateTest();
// to add test attempted by user end
  });
