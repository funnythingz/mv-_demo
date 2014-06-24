(function() {

  'use strict';

  angular.module('App', []).controller('Ctrl', function ($scope) {

      $scope.items = [];

      var counter = 0;
      $scope.seeMore = function() {
          for(var i = 0; i < 3; i++) {
              $scope.items.push({id: counter});
              counter += 1;
          }
      };

      $scope.seeMore();
  });

})();
