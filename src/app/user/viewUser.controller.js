(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);

	/** @ngInject */
	function ViewUserController(UserService, $mdDialog) {
		var vm = this;
    vm.openEditDemandDialog = openEditDemandDialog;
    vm.openDeleteDemandDialog = openDeleteDemandDialog;


	function loadProfile(){
		UserService.getUserByID(1)
			.then(function(profile){
				vm.profile = profile;
			});
	}

    function openEditDemandDialog($event, demandID){
      $mdDialog.show({
        controller: 'UpdateDemandController',
        controllerAs: 'vm',
        templateUrl: 'app/demands/update/update_demand.html',
        targetEvent: $event,
        clickOutsideToClose:true,
		locals: {
			demandID: demandID
        }
      })
	  .finally(loadProfile);
    }

    function openDeleteDemandDialog($event, demandID){
      $mdDialog.show({
        controller: 'DeleteDemandController',
        controllerAs: 'vm',
        templateUrl: 'app/demands/delete/delete_demand.html',
        targetEvent: $event,
        clickOutsideToClose:true,
		locals: {
			demandID: demandID
        }
      })
	  .finally(loadProfile);
    }

		loadProfile();
	}
})();
