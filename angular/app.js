(function() {

  'use strict';

  var isEmpty = function(arg) {

    if(typeof arg !== null) {
        return true;
    }

    return false;
  }

  var testApp = angular.module('testApp', []);

  testApp.controller('hogeCtrl', function ($scope) {

    $scope.yourName = (isEmpty($scope.yourName))? 'YourName' : $scope.yourName;

    $scope.entries = [
      {
        'title' : 'hogeTitle1',
        'description' : 'hogeDescription1'
      },
      {
        'title' : 'hogeTitle2',
        'description' : 'hogeDescription2'
      },
      {
        'title' : 'hogeTitle3',
        'description' : 'hogeDescription3'
      },
      {
        'title' : 'hogeTitle4',
        'description' : 'hogeDescription4'
      },
    ];
  });

})();
