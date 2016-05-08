(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('DeleteOfferController', DeleteOfferController);

  /** @ngInject */
  function DeleteOfferController(OfferService, $mdDialog, toastr, offerID) {
    var vm = this;

    vm.deleteOffer = deleteOffer;
    vm.closeDialog = closeDialog;

    function deleteOffer(){
      OfferService.deleteOffer(offerID)
        .then(function(){
          toastr.success('La oferta fue eliminada con exito', 'Oferta creada');
        })
        .catch(function(){
          toastr.error('Hubo un error al intentar eliminar la oferta!', 'Error!');
        });
      $mdDialog.hide();
    }

    function closeDialog(){
      $mdDialog.cancel();
    }
  }
})();
