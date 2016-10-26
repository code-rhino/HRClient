'use strict';

/**
 * @ngdoc function
 * @name hrclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrclientApp
 */
angular.module('hrclientApp')
  .controller('TimeCardCtrl', function (TimeCardService, $scope) {

     $scope.timecard = {
       "email":"melanie@zipcoder.io",
       "startTime":"9:01pm",
       "endTime":"9:00am"
     };

     $scope.timeCards = TimeCardService.async;

     $scope.$watch('timeCards', function(timeCards){
       if(angular.isDefined(timeCards.then)){
         timeCards.then(function(response){
           console.log(response);
           $scope.timeCards = response.data;
         }, function(error){

         });

       }
     });

     $scope.save = function(timecard){
       console.log(timecard);
       TimeCardService.save(timecard);
     }
  });
