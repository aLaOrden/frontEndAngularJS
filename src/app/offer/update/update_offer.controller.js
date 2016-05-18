(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('UpdateOfferController', UpdateOfferController);

  /** @ngInject */
  function UpdateOfferController(OfferService, $mdDialog, toastr, offerID) {
    var vm = this;

    vm.updateOffer = updateOffer;
    vm.closeDialog = closeDialog;
	vm.selectLocation = selectLocation;
	vm.mapCenter = { latitude: 4.57, longitude: -73.97, idkey: 1 };

    function updateOffer(){
      OfferService.updateOffer(vm.offer)
        .then(function(){
          toastr.success('La oferta fue actualizada con exito', 'Oferta actualizada');
        })
        .catch(function(){
          toastr.error('Hubo un error al intentar actualizar la oferta!', 'Error!');
        });
      $mdDialog.hide();
    }

   function loadOffer(){
		OfferService.getOffersByID(offerID)
			.then(function(offer){
				offer.deadline = new Date(offer.deadline);
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
