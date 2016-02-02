(function(){
  'use strict';

  angular.module('system')
         .service('systemService', ['$q', SystemsService]);

  /**
   * Systems DataService
   * Systems embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function SystemsService($q){
    var systems = [
      {
        name: 'Windows',
        color: '#ACEC00',
        total: 78
      },
      {
        name: 'Linux',
        color: '#00BBD6',
        total: 49
      },
      {
        name: 'Mac',
        color: '#BA65C9',
        total: 57
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
        title: 'Friends',
        icon: 'social:ic_group_24px'
      },
      {
        link : '',
        title: 'Messages',
        icon: 'communication:ic_message_24px'
      }
    ];

    // Promise-based API
    return {
      loadAllSystems : function() {
        // Simulate async nature of real remote calls
        return $q.when(systems);
      },
      loadMenu : function() {
        // Simulate async nature of real remote calls
        return $q.when(menu);
      }
    };
  }

})();
