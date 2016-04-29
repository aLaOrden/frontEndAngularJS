(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('CreateOfferController', CreateOfferController);
	
	/** @ngInject */
	function CreateOfferController(OfferService, $mdDialog, toastr) {
		var vm = this;
		
		vm.offer = {state: "activo"};
		vm.createOffer = createOffer;
		vm.closeDialog = closeDialog;
		vm.selectLocation = selectLocation;
		vm.selectingLocation = false;
		vm.mapCenter = { latitude: 45, longitude: -73, idkey: 1 };
		
		function createOffer(){
			OfferService.createOffer(vm.offer)
				.then(function(){
					toastr.success('La oferta fue creada con exito', 'Oferta creada');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar crear la oferta!', 'Error!');
				});
			$mdDialog.hide();
		}
		
		function closeDialog(){
			$mdDialog.cancel();
		}
		
		function selectLocation(){
			vm.offer.latitude = vm.mapCenter.latitude;
			vm.offer.longitude = vm.mapCenter.longitude;
			vm.selectingLocation = !vm.selectingLocation;
		}
	}
})();
