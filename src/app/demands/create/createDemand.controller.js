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
		vm.selectLocation = selectLocation;
		vm.selectingLocation = false;
		vm.mapCenter = { latitude: 45, longitude: -73, idkey: 1 };
		
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
		
		function selectLocation(){
			vm.demand.latitude = vm.mapCenter.latitude;
			vm.demand.longitude = vm.mapCenter.longitude;
			vm.selectingLocation = !vm.selectingLocation;
		}
	}
})();
