(function(){
  'use strict';

  angular.module('commonIssue')
         .service('commonIssueService', ['$q', CommonIssueService]);

  /**
   * CommonIssue DataService
   * CommonIssue embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function CommonIssueService($q){

    var someNumber = [8325,5875,6158,2154];
    var commonIssues = [];
    var otherIssues = [];
    for (var i = 1; i < 11; i ++) {
      commonIssues.push({
        "issue": "issue " + i,
        "asigra": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "ramir": Math.floor((Math.random()* 9548))
      });
    }

    for (var i = 1; i < 11; i ++) {
      otherIssues.push({
        "issue": "issue " + i,
        "asigra": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)])),
        "ramir": Math.floor((Math.random()* someNumber[Math.floor(Math.random()*3)]))
      });
    }
    /*
    var commonIssues = [
      {
        "issue": "2009",
        "asigra": 26112,
        "ramir": 32203,
        "europe": 18745,
        "southAmerica": 5780
      },
      { 
        "issue": "2010",
        "asigra": 30569,
        "ramir": 27568,
        "europe": 12745,
        "southAmerica": 5080
      },
      {
        "issue": "2011",
        "asigra": 23025,
        "ramir": 2403,
        "europe": 21745,
        "southAmerica": 2198
      },
      {
        "issue": "2012",
        "asigra": 34439,
        "ramir": 26785,
        "europe": 21443,
        "southAmerica": 4145
      },
      {
        "issue": "2013",
        "asigra": 43897,
        "ramir": 14546,
        "europe": 8793,
        "southAmerica": 5807
      },
      {
        "issue": "2014",
        "asigra": 26112,
        "ramir": 9878,
        "europe": 13457,
        "southAmerica": 3987
      },
      {
        "issue": "2015",
        "asigra": 36112,
        "ramir": 44878,
        "europe": 19457,
        "southAmerica": 6889
      }
    ];
    */

    // Promise-based API
    return {
      loadAllcommonIssue : function() {
        // Simulate async nature of real remote calls
        return $q.when(commonIssues);
      },
      loadOthercommonIssue : function() {
        // Simulate async nature of real remote calls
        return $q.when(otherIssues);
      }
      
    };
  }

})();
