(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('DeleteOfferController', DeleteOfferController);

  /** @ngInject */
  function DeleteOfferController(OfferService, $mdDialog, toastr) {
    var vm = this;

    vm.offer = {state: "activo"};
    vm.deleteOffer = deleteOffer;
    vm.closeDialog = closeDialog;

    function deleteOffer(){
      OfferService.deleteOffer(vm.offer)
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
