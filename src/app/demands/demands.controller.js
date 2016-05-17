(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('DemandsController', DemandsController);

	/** @ngInject */
	function DemandsController(DemandsService, $mdDialog) {
		var vm = this;

		vm.openCreateDialog = openCreateDialog;
		vm.openViewDialog = openViewDialog;

		function loadDemands(){
			DemandsService.getAllDemands()
				.then(function(demands){
					vm.demands = demands;
				});
		}

		function openCreateDialog($event){
			$mdDialog.show({
				controller: 'CreateDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/create/createDemand.html',
				targetEvent: $event,
				clickOutsideToClose:true
			})
			.finally(function() {
				loadDemands();
			});
		}
		
		function openViewDialog($event, demandID){
			$mdDialog.show({
				controller: 'ViewDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/view/viewDemand.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					demandID: demandID
				}
			})
			.finally(function() {
				loadDemands();
			});
		}

		loadDemands();
	}
})();
