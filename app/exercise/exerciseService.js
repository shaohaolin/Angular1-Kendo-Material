(function(){
  'use strict';

  angular.module('exercise')
         .service('exerciseService', ['$q', exerciseService]);

  /**
   * exercise DataService
   * exercise embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function exerciseService($q){
    var exercise = [
      {
        name: 'chest',
        color: '#ACEC00',
        total: 82
      },
      {
        name: 'back',
        color: '#00BBD6',
        total: 49
      },
      {
        name: 'legs',
        color: '#BA65C9',
        total: 57
      },
      {
        name: 'arms',
        color: '#EF5350',
        total: 57
      },
      {
        name: 'core',
        color: '#FFEE58',
        total: 57
      }
    ];

    // Promise-based API
    return {
      loadAllexercise : function() {
        // Simulate async nature of real remote calls
        return $q.when(exercise);
      }
    };
  }

})();
