angular.module('MyApp')
  .factory('TestsApi', function($http) {
    return {
      createTest: function(data) {
        return $http.post('/api/tests', data);
      },
      viewSingleTest: function(testid) {
        return $http.get('/api/tests/'+testid, null);
      },
      deleteSingleTest: function(testid) {
        return $http.delete('/api/tests/'+testid, null);
      },
      editSingleTest: function(testid, data) {
        return $http.put('/api/tests/'+testid, data);
      },
      getSingleQuestion: function(questionid) {
        return $http.put('/api/questions/'+questionid, null);
      },
      sendSolution: function(questionid, testid, data) {
        return $http.post('/api/tests/'+testid+'/questions/'+questionid+'/answer', data);
      },
      deleteSingleQuestion: function(questionid) {
        return $http.delete('/api/questions/'+questionid, null);
      },
      editSingleQuestion: function(questionid, data) {
        return $http.put('/api/questions/'+questionid, data);
      },
      getSingleTestQuestions: function(testid) {
        return $http.get('/api/tests/'+testid+'/questions', null);
      },
      addQuestion: function(data, testid) {
        return $http.post('/api/tests/'+testid+'/questions', data);
      },
      viewAllTests: function(data) {
        return $http.get('/api/tests', data);
      },
      deleteTest: function() {
        return $http.delete('api/testid/deletetest'); //not done yet
      },
      getSingleTestAnswers: function(testid) {
        return $http.get('api/tests/'+testid+'/answers', null);
      },
      getAllTests: function() {
        return $http.get('api/tests/', null);
      },
      getAllUsers: function() {
        return $http.get('api/users/', null);
      },
      testAttemptedBySend: function(testid, data) {
        return $http.put('api/tests/'+testid+'/attemptedby', data);
      },
      forgotPassword: function(data) {
        return $http.post('/forgot', data);
      },
      resetPassword: function(data) {
        return $http.post('/reset', data);
      }
    };
  });
