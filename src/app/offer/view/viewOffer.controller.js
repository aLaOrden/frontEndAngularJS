(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('ViewOfferController', ViewOfferController);

  /** @ngInject */
  function ViewOfferController(OfferService, $mdDialog, toastr, offerID, $location) {
    var vm = this;

    vm.closeDialog = closeDialog;
	vm.selectLocation = selectLocation;
	vm.applyOffer = applyOffer;
	vm.viewProfile = viewProfile;
	vm.mapCenter = { latitude: 4.57, longitude: -73.97, idkey: 1 };
	
	function viewProfile(){
		$location.url("/viewUser");
		$location.search("id",vm.offer.userId);
		$mdDialog.hide();
	}
	
	function applyOffer(){
		/*
		OfferService.updateOffer(vm.offer)
			.then(function(){
				toastr.success('Has aplicado a la oferta con éxito', 'Aplicación exitosa');
			})
			.catch(function(){
				toastr.error('Hubo un error al intentar aplicar la oferta!', 'Error!');
			});
		*/
		$mdDialog.hide();
	}

   function loadOffer(){
		OfferService.getOffersByID(offerID)
			.then(function(offer){
				vm.offer = offer;
			});
    }
	
    function closeDialog(){
		$mdDialog.cancel();
    }
	
	function selectLocation(){
		vm.offer.latitude = vm.mapCenter.latitude;
		vm.offer.longitude = vm.mapCenter.longitude;
		vm.selectingLocation = !vm.selectingLocation;
	}
	
	loadOffer();
  }
})();
