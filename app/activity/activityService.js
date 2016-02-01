(function(){
  'use strict';

  angular.module('activity')
         .service('activityService', ['$q',activityService]);

  /**
   * activitys DataService
   * activitys embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function activityService($q){
    var activities = [
      {
        name: 'Sit',
        color: '#ACEC00',
        total: 23
      },
      {
        name: 'Walk',
        color: '#00BBD6',
        total: 49
      },
      {
        name: 'Run',
        color: '#BA65C9',
        total: 32
      }
    ];

    // Promise-based API
    return {
      loadAllactvitys : function() {
        // Simulate async nature of real remote calls
        return $q.when(activities);
      }
    };
  }

})();
