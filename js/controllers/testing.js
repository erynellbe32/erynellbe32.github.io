
// configure angular modules here

myApp.controller('TestingCtrl',
  ['$scope','$timeout', function($scope) {
 

 //Test OBJECTS
    $scope.testTypes = [
      {
      "id":"NPQ",
      "codes": 'NPQ',
      "urls": '/tests/npq',
      "displayText": "Nonverbal Personality Questionnaire",
      "duration" : 30
      },{
      id: "MPQ",
      "codes": 'MPQ',
      "urls": '/tests/mpq',
      "displayText": "Manchester Personality Questionnaire",
      "choices": ["VERY SELDOM","SELDOM","SOMETIMES","OFTEN","VERY TRUE"],
      "duration" : 30
      },{
      "id":"MDQ",
      "codes": 'MDQ',
      "urls": '/tests/mdq',
      "displayText": 'Management Development Questionnaire',
     "duration" : 30
      },{
      "id":"BOE",
      "codes": 'BarOn EQ', 
      "urls": '/tests/baroneq', 
      "displayText": 'Intelligence Test (EQ)',
     "duration" : 30      
      },{
      "id":"EAS",
      "codes": 'EAS', 
      "urls": '/tests/eas', 
      "displayText": 'Employee Aptitude Survey',
      "duration" : 30
      }
    ];
}]);




/*
    // Filter Condition ?? 
    $scope.filterCondition = {
        testType: $scope.testTypes[0]
    };

*/


/*
// Collection Binding
//commit var to selected radio button then on view
// var selectedTest =

$scope.chosenTestTypes ("codes", choices,duration) = {
this."codes" = "codes";
this.choices = choices;
this.duration = duration;
};




/**
 * [ClockCtrl description]
 */
 /*   myApp.controller('ClockCtrl', ['$scope', '$timeout', function($scope, $timeout) {
      $scope.clock = {
        value: 0
      };
      $scope.myLaps = [];
      $scope.theirLaps = [];
      $scope.otherLaps = [];
      $scope.allLaps = [];
      $scope.stopwatch = null;
      $scope.delay = 100;
        
      $scope.start = function () {
        $scope.stopwatch = $timeout(function() {
          $scope.clock.value ++;
          $scope.start();
        }, $scope.delay);
      };
      
      $scope.stop = function () {
        $timeout.cancel($scope.stopwatch);
        $scope.stopwatch = null;
      };
      
      $scope.resetLaps = function () {
        $scope.myLaps = [];
        $scope.theirLaps = [];
        $scope.otherLaps = [];
        $scope.allLaps = [];
      };

      $scope.resetClock = function() {
        $scope.clock.value = 0;
      };
      
      $scope.reset = function () {
        $scope.stop();
        $scope.resetClock();
        $scope.resetLaps();
      };
      
      $scope.myLap = function () {
        var currentTime = $scope.clock.value;
        $scope.myLaps.push(currentTime);
        $scope.allLaps.push(currentTime);
      };
      
      $scope.theirLap = function () {
        var currentTime = $scope.clock.value;
        $scope.theirLaps.push(currentTime);
        $scope.allLaps.push(currentTime);
      };
      
      $scope.otherLap = function () {
        var currentTime = $scope.clock.value;
        $scope.otherLaps.push(currentTime);
        $scope.allLaps.push(currentTime);
      };


    }]);
*/