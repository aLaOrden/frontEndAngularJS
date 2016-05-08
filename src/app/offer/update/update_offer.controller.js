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
	
	loadOffer();
  }
})();
