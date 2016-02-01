(function(){

  angular
       .module('products')
       .controller('productsController', [
          '$scope', 'productsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          productsController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function productsController( $scope, productsService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.products     = [ ];
    self.menu         = [ ];
    //self.selectProduct   = selectProduct;
    self.toggleSidenav   = toggleSidenav;
    self.showContactOptions  = showContactOptions;

    // Load all registered products
    productsService
          .loadAllProducts()
          .then( function( products ) {
            self.products    = [].concat(products);
            self.selected = products[0];
          });

    // Load menu
    productsService
          .loadMenu()
          .then( function( menu ) {
            self.menu    = [].concat(menu);
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleSidenav ( menuId ) {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav(menuId).toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( product ) {
      self.selected = angular.isNumber(product) ? $scope.products[product] : product;
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var product = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.product = product ;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
