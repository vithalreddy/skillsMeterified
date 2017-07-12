angular.module('MyApp')
  .controller('HeaderCtrl', function($scope,$rootScope, $location, $window, $auth) {


    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.isAdmin = function() {
      if ($rootScope.currentUser) {
      if ($rootScope.currentUser.email == "vmreddyvmb@gmail.com") {
        return true;
      } else{
        return false;
      }
    } else{
      return false;
    }
    };
    
    $scope.logout = function() {
      $auth.logout();
      delete $window.localStorage.user;
      $location.path('/');
    };
  });
