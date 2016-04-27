(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('CreateOfferController', CreateOfferController);
	
	/** @ngInject */
	function CreateOfferController(OfferService, $mdDialog, toastr) {
		var vm = this;
		
		vm.demand = {};
		vm.createOffer = createOffer;
		vm.closeDialog = closeDialog;
		
		function createOffer(){
			OfferService.createOffer(vm.demand)
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
	}
})();
