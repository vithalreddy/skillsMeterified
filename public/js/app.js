angular.module('MyApp', ['ngRoute', 'satellizer'])
  .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/account', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/forgot', {
        templateUrl: 'partials/forgot.html',
        controller: 'ForgotCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/createtest', {
        templateUrl: 'partials/createTest.html',
        controller: 'createTestCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/viewtest/:testid', {
        templateUrl: 'partials/viewTest.html',
        controller: 'viewSingleTestCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/editquestion/:questionid', {
        templateUrl: 'partials/editquestion.html',
        controller: 'editSingleTestCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/live-test/:testid', {
        templateUrl: 'partials/livetest.html',
        controller: 'liveTestCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/live-test/scorecard/:testid', {
        templateUrl: 'partials/scorecard.html',
        controller: 'testResultCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/admin-view-all-test-and-users', {
        templateUrl: 'partials/admin-view-all-test-and-users.html',
        controller: 'adminViewAllCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';
    $authProvider.facebook({
      url: '/auth/facebook',
      clientId: '226076567890861',
      redirectUri: 'https://skillsmeterified-by-vmr.herokuapp.com/auth/facebook/callback'
    });
    $authProvider.google({
      url: '/auth/google',
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });


    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
