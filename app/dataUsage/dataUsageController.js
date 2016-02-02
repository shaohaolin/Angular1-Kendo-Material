(function(){

  angular
       .module('dataUsage')
       .controller('DataUsageController', [
          '$scope', 'dataUsageService', '$log', '$q', '$interval',
          DataUsageController
       ]);

  /**
   * DataUsage Controller for DataUsage
   * @param $scope
   * @param dataUsageService
   * @constructor
   */
  function DataUsageController( $scope, dataUsageService, $log, $q, $interval) {
    var self = this;

    self.DataUsages     = [ ];
    self.DataUsageData = new kendo.data.DataSource();
    self.DataUsagechart = {
      series: [{
        field: "northAmerica",
        name: "North America",
        color: "#ACEC00",
        markers: {
          visible: true,
          background: "#ACEC00"
        }
      }, {
        field: "asia",
        name: "Asia",
        color: "#00BBD6",
        markers: {
          visible: true,
          background: "#00BBD6"
        }
      },{
        field: "europe",
        name: "Europe",
        color: "#BA65C9",
       markers: {
          visible: true,
          background: "#BA65C9"
        }
      },{
        field: "southAmerica",
        name: "South America",
        color: "#EF5350",
        markers: {
          visible: true,
          background: "#EF5350"
        }
      }],
      categoryAxis: {
        field: "year",
        majorGridLines: {
          visible: false
        },
        crosshair: {
          visible: true
        }
      },
      seriesDefaults: {
        type: 'line',
        style: 'smooth'
      },
      tooltip: {
        visible: true,
        template: "#= category #: #= value #"
      },
      chartArea: {
        margin: 0,
        height: 250 /* add this option */
      }, 
      legend: {
        position: "bottom"
      }
    };
    // Load all registered products
    dataUsageService
          .loadAllDataUsage()
          .then( function( DataUsage ) {
            self.DataUsages    = [].concat(DataUsage);
            self.DataUsageData.data(self.DataUsages);
          });

    // *********************************
    // Internal methods
    // *********************************
    self.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    
    $interval( 
      function(){ 
        dataUsageService
               .loadOtherDataUsage()
               .then( function( DataUsage ) {
                  self.DataUsages    = [].concat(DataUsage);
                  self.DataUsageData.data(self.DataUsages);
                }); 
      }, 3000);


  }

})();
