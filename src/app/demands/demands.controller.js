(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('DemandsController', DemandsController);

	/** @ngInject */
	function DemandsController(DemandsService, $mdDialog) {
		var vm = this;
		
		vm.openCreateDialog = openCreateDialog;
		
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
				templateUrl: 'app/demands/create/create_demand.html',
				targetEvent: $event,
				clickOutsideToClose:true
			});
		}
		
		loadDemands();
	}
})();
