(function(){
  'use strict';

  angular.module('MasterTelemetry')
         .directive('resizeChart', ['$window', function($window){
           return {
             restrict: 'A',
             scope: {
              chartname: '@'
             },
             link: function(scope, iElm, iAttrs, controller) {
               angular.element($window).bind('load', resizeKendoChart);
               angular.element($window).bind('resize', resizeKendoChart);

               function resizeKendoChart() {
                var width = iElm.width() - 25;
                var chart = $("#"+ scope.chartname ).data("kendoChart");
                $("#"+ scope.chartname).css( {width: width});
                chart.redraw();
               }

             }
           };
         }]);

})();
