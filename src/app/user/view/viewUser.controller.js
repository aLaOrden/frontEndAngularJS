(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);

	/** @ngInject */
	function ViewUserController(UserService, $location, toastr, $mdDialog) {
		var vm = this;
		
		vm.openEditDemandDialog = openEditDemandDialog;
		vm.openDeleteDemandDialog = openDeleteDemandDialog;
		
		function loadProfile(profileID){
			UserService.getUserByID(profileID)
				.then(function(profile){
					vm.profile = profile;
				});
		}
		
		function detectProfile(){
			var profileID;
			if($location.search().id){
				profileID = $location.search().id;
				loadProfile(profileID);
			}
			else{
				try{
					profileID = angular.fromJson(sessionStorage.user).id;
					loadProfile(profileID);
				}
				catch(err){
					toastr.error('Hubo un error al cargar los datos del usuario!', 'Error!');
				}
			}
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
		
		detectProfile();
	}
})();
