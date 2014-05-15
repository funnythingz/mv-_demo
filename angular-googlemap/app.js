(function() {

  var app = angular.module('app', ['google-maps']);
  app.controller('simpleController', function($scope) {
    $scope.map = {

      center: {
        latitude: 35.670651,
        longitude: 139.77186099999994
      },

      zoom: 16

    };

    $scope.marker = {

      coords: {
                latitude: 35.670651,
                longitude: 139.77186099999994
              },

      options: {
                 clickable: true
               },

      events: {
                click: function(marker, eventName, arg) {
                 console.log('click');
                 console.log(marker.getPosition().lat());
                 console.log(marker.getPosition().lng());
               }
              }
    }

  });

})();
