(function(){

  angular
       .module('rating')
       .controller('ratingController', [
          '$scope', 'ratingService', '$log', '$q',
          ratingController
       ]);

  /**
   * rating Controller for rating
   * @param $scope
   * @param dsratingService
   * @constructor
   */
  function ratingController( $scope, ratingService, $log, $q) {
    var self = this;

    self.ratings     = [ ];
    self.ratingData = new kendo.data.DataSource();
    self.ratingchart = {
      series: [{
        field: "total",
        categoryField: "name",
        padding: 0,
        overlay: {
            gradient: "none"
        }
      }],
      seriesDefaults: {
        type: 'bar',
        style: 'smooth'
      },
      chartArea: {
        margin: 0,
        height: 250 /* add this option */
      },
      tooltip: {
          visible: true,
          template: "#= category #: #= value #"
      },
      legend: {
        position: "bottom"
      }
    };
    
    // Load all registered products
    ratingService
          .loadAllratings()
          .then( function( ratings ) {
            self.ratings    = [].concat(ratings);
            self.ratingData.data(self.ratings);
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
