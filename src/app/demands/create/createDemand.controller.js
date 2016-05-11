(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('CreateDemandController', CreateDemandController);
	
	/** @ngInject */
	function CreateDemandController(DemandsService, $mdDialog, toastr) {
		var vm = this;
		
		vm.demand = {state: "activo", solved: false};
		vm.createDemand = createDemand;
		vm.closeDialog = closeDialog;
		
		function createDemand(){
			DemandsService.createDemand(vm.demand)
				.then(function(){
					toastr.success('La demanda fue creada con exito', 'Demanda creada');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar crear la demanda!', 'Error!');
				});
			$mdDialog.hide();
		}
		
		function closeDialog(){
			$mdDialog.cancel();
		}
	}
})();
