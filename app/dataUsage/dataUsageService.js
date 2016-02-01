(function(){
  'use strict';

  angular.module('dataUsage')
         .service('dataUsageService', ['$q', DataUsageService]);

  /**
   * DataUsage DataService
   * DataUsage embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DataUsageService($q){

    var someNumber = [8325,5875,6158,2154];
    var DataUsages = [];
    var otherUsages = [];
    for (var i = 0; i < 7; i ++) {
      DataUsages.push({
        "year": 2009 + i ,
        "northAmerica": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "asia": Math.floor((Math.random()* 9548)),
        "europe": Math.floor((Math.random()* 6413)),
        "southAmerica": Math.floor((Math.random()* 2154)) 
      });
    }

    for (var i = 0; i < 7; i ++) {
      otherUsages.push({
        "year": 2009 + i ,
        "northAmerica": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "asia": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "europe": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "southAmerica": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])) 
      });
    }
    
    // Promise-based API
    return {
      loadAllDataUsage : function() {
        // Simulate async nature of real remote calls
        return $q.when(DataUsages);
      },
      loadOtherDataUsage : function() {
        // Simulate async nature of real remote calls
        return $q.when(otherUsages);
      }
      
    };
  }

})();
