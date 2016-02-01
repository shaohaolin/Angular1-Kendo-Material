(function(){
  'use strict';

  angular.module('products')
         .service('productsService', ['$q', ProductsService]);

  /**
   * Products DataService
   * Products embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ProductsService($q){
    var products = [
      {
        name: 'System',
        color: '#ACEC00',
        percentage: 82,
        icon: 'action:ic_label_24px'
      },
      {
        name: 'Activity',
        color: '#00BBD6',
        percentage: 49,
        icon: 'action:ic_label_24px'
      },
      {
        name: 'Exercise',
        color: '#BA65C9',
        percentage: 57,
        icon: 'action:ic_label_24px'
      },
      {
        name: 'Rating',
        color: '#EF3C79',
        percentage: 98,
        icon: 'action:ic_label_24px'
      }
    ];

    var menu = [
      {
        link : '',
        title: 'Dashboard',
        icon: 'action:ic_dashboard_24px' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
      },
      {
        link : '',
        title: 'Event',
        icon: 'notification:ic_event_note_24px'
      },
      {
        link : '',
        title: 'Messages',
        icon: 'communication:ic_message_24px'
      },
      {
        link : '',
        title: 'Bug Report',
        icon: 'action:ic_bug_report_24px'
      },
      {
        link : '',
        title: 'Setting',
        icon: 'action:ic_settings_24px'
      }
    ];

    // Promise-based API
    return {
      loadAllProducts : function() {
        // Simulate async nature of real remote calls
        return $q.when(products);
      },
      loadMenu : function() {
        // Simulate async nature of real remote calls
        return $q.when(menu);
      }
    };
  }

})();
