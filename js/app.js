var myApp = angular.module('myApp',
  ['ngRoute','firebase'])
  .constant('FIREBASE_URL', 'https://angdata77.firebaseIO.com/');


myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).

    when('/user', {
      templateUrl: 'views/user.html',
      controller: 'TestingCtrl'
    }).

    when('/tests/reminder', {
      templateUrl: 'views/reminder.html',
      controller: 'TestingCtrl'
    }).
    when('/tests/mpq', {
      templateUrl: 'views/mpq.html',
      controller: 'TestingCtrl'
    }).
    when('/results/mpq', {
      templateUrl: 'views/r_mpq.html',
      controller: 'mpqCtrl'
    }).




/*   

CORE APPLICATION

*/

    when('/exam', {
      templateUrl: 'views/exam_menu.html',
      controller: 'TestingCtrl',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).

/*

  // Once MPQ is Chosen Needs further makeup
    this.goToView = function (reminder) {
    $location.url('/tests/reminder');

    // Once Button Start is Chosen
  };
  function startMPQ () {
    $location.path('/tests/mpq');

  }*/


/*   

* WAITING LIST VIEWS

    when('/user', {
      templateUrl: 'views/user.html',
      controller: 'userCtrl'
    }).

    when('/tester', {
      templateUrl: 'views/tester.html',
      controller: 'testerCtrl'
    }).

    when('/reminder', {
      templateUrl: 'views/reminder.html',
      controller: 'reminderCtrl'
    }).

    when('/npq', {
      templateUrl: 'npq.html',
      controller: 'npqCtrl'
    }).
    when('/results', {
      templateUrl: 'results.html',
      controller: 'resultsCtrl'
    }).

FOR DELETION


    when('/checkins/:uId/:mId', {
      templateUrl: 'views/checkins.html',
      controller: 'CheckInsController'
    }).
    when('/checkins/:uId/:mId/checkinsList', {
      templateUrl: 'views/checkinslist.html',
      controller: 'CheckInsController'
    }).
    when('/meetings', {
      templateUrl: 'views/meetings.html',
      controller: 'MeetingsController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).

*/

    otherwise({
      redirectTo: '/login'
    });
}]);