(function(){

  angular
       .module('activity')
       .controller('activityController', [
          '$scope', 'activityService', '$log', '$q',
          activityController
       ]);

  /**
   * Activity Controller
   * @param $scope
   * @param activityService
   * @constructor
   */
  function activityController( $scope, activityService, $log, $q) {
    var self = this;

    self.actvitys     = [ ];
    self.actvityData = new kendo.data.DataSource();
    self.actvitychart = {
      series: [{
        field: "total",
        categoryField: "name",
        holeSize: 85,
        padding: 0,
        overlay: {
            gradient: "none"
        }
      }],
      seriesDefaults: {
        type: 'donut',
        style: 'smooth'
      },
      panes: [{
        title: {
          text: '49%',
          visible: true,
          visual: function (e) {
              var draw = kendo.drawing;
              var geom = kendo.geometry;
              var group = new draw.Group();

              var center = e.rect.center();
              var circleGeometry = new geom.Circle([center.x, center.y], e.rect.size.height / 2);
              var circle = new draw.Circle(circleGeometry).stroke("white", 1).fill("white");
              var text = new draw.Text(e.text, new geom.Point(0,0), {font : "72px Roboto"});
              var point = new geom.Point(circle.bbox().center().x - text.bbox().center().x, circle.bbox().center().y - text.bbox().center().y);
              text.position(point);
              group.append(circle, text);
              return group;
          }
        }
      }],
      tooltip: {
        visible: true,
        template: "#= category #: #= value #"
      },
      chartArea: {
        margin: 0,
        height: 250 /* add this option */
      }
    };
    self.legend = {
      position: "bottom",
      labels: {
        template: "#: text #"
      }
    };
    // Load all registered products
    activityService
          .loadAllactvitys()
          .then( function( actvitys ) {
            self.actvitys    = [].concat(actvitys);
            self.actvityData.data(self.actvitys);
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
