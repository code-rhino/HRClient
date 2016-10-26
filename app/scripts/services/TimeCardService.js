angular.module('hrclientApp')
.factory('TimeCardService', function($http, $q) {
  var deffered = $q.defer();
  var data = [];
  var timeCardService = {};
  var url = 'http://localhost:8080/timecard';
  
  timeCardService.async = $http.get(url);

  timeCardService.save = function(timecard){
    $http.post(url, timecard)
    .success(function(d){
      deffered.resolve();
    });
    return deffered.promise;
  }

  timeCardService.data = function() { return data; };

  return timeCardService;
});
