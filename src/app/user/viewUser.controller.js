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
        controller: 'UpdateDemandController',
        controllerAs: 'vm',
        templateUrl: 'app/demands/update/update_demand.html',
        targetEvent: $event,
        clickOutsideToClose:true
      });
    }

    function openDeleteDialog($event){
      $mdDialog.show({
        controller: 'UpdateDemandController',
        controllerAs: 'vm',
        templateUrl: 'app/demands/delete/delete_demand.html',
        targetEvent: $event,
        clickOutsideToClose:true
      });
    }

		loadProfile();
	}
})();
