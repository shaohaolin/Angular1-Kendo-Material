(function(){
  'use strict';

  angular.module('rating')
         .service('ratingService', ['$q', ratingService]);

  /**
   * ratings DataService
   * ratings embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ratingService($q){
    var ratings = [
      {
        name: 'Benz',
        color: '#ACEC00',
        total: 82
      },
      {
        name: 'BMW',
        color: '#00BBD6',
        total: 49
      },
      {
        name: 'Adui',
        color: '#BA65C9',
        total: 57
      },
      {
        name: 'Lexus',
        color: '#EF5350',
        total: 59
      }
    ];

    // Promise-based API
    return {
      loadAllratings : function() {
        // Simulate async nature of real remote calls
        return $q.when(ratings);
      }
    };
  }

})();
