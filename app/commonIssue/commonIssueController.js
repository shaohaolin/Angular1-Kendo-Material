(function(){

  angular
       .module('commonIssue')
       .controller('CommonIssueController', [
          '$scope', 'commonIssueService', '$log', '$q', '$interval',
          CommonIssueController
       ]);

  /**
   * CommonIssue Controller for commonIssue
   * @param $scope
   * @param commonIssueService
   * @constructor
   */
  function CommonIssueController( $scope, commonIssueService, $log, $q, $interval) {
    var self = this;

    self.CommonIssues     = [ ];
    self.CommonIssueData = new kendo.data.DataSource();
    self.CommonIssuechart = {
      series: [{
        field: "asigra",
        name: "Asigra",
        color: '#ACEC00',
      }, {
        field: "ramir",
        name: "Ramir",
        color: '#00BBD6',
      }],
      categoryAxis: {
        field: "issue"
      },
      seriesDefaults: {
        type: 'radarLine'
      },
      tooltip: {
        visible: true,
        template: "#= category #: #= value #"
      },
      chartArea: {
        margin: 0,
        height: 400 /* add this option */
      }, 
      valueAxis: {
        visible: false
      },
      legend: {
        position: "bottom"
      }
    };
    // Load all registered products
    commonIssueService
          .loadAllcommonIssue()
          .then( function( commonIssues ) {
            self.CommonIssues    = [].concat(commonIssues);
            self.CommonIssueData.data(self.CommonIssues);
          });

    // *********************************
    // Internal methods
    // *********************************
    self.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  
  }

})();
