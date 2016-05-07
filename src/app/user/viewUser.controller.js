(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);

	/** @ngInject */
	function ViewUserController(UserService, $mdDialog) {
		var vm = this;

    vm.openEditDialog = openEditDialog;
    vm.openDeleteDialog = openDeleteDialog;

		function loadProfile(){
			UserService.getUserByID(1)
				.then(function(profile){
					vm.profile = profile;
				});
		}
    function openEditDialog($event){
      $mdDialog.show({
        controller: 'UpdateOfferController',
        controllerAs: 'vm',
        templateUrl: 'app/offer/update/update_offer.html',
        targetEvent: $event,
        clickOutsideToClose:true
      });
    }
    function openDeleteDialog($event){
      $mdDialog.show({
        controller: 'DeleteOfferController',
        controllerAs: 'vm',
        templateUrl: 'app/offer/delete/delete_offer.html',
        targetEvent: $event,
        clickOutsideToClose:true
      });
    }


    loadProfile();
	}
})();
