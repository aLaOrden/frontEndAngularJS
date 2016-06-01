(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewDemandController', ViewDemandController);
	
	/** @ngInject */
	function ViewDemandController(DemandsService, $mdDialog, demandID, $location, $filter) {
		var vm = this;
		
		vm.closeDialog = closeDialog;
		vm.applyDemand = applyDemand;
		vm.viewProfile = viewProfile;
		
		function loadDemand(){
			DemandsService.getDemandsByID(demandID)
				.then(function(demand){
					demand.deadlineText = $filter('date')(demand.deadline, "shortDate");
					vm.demand = demand;
				});
		}
		
		function viewProfile(){
			$location.url("/viewUser");
			$location.search("id",vm.demand.userId);
			$mdDialog.hide();
		}
		
		function applyDemand(){
			/*
			DemandsService.updateDemand(vm.demand)
				.then(function(){
					toastr.success('Has aplicado a la demanda con éxito', 'Aplicación exitosa');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar aplicar la demanda!', 'Error!');
				});
			*/
			$mdDialog.hide();
		}
		
		function closeDialog(){
			$mdDialog.cancel();
		}
		
		loadDemand();
	}
})();
