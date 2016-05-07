(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('UpdateOfferController', UpdateOfferController);

  /** @ngInject */
  function UpdateOfferController(OfferService, $mdDialog, toastr) {
    var vm = this;

    vm.offer = {state: "activo"};
    vm.updateOffer = updateOffer;
    vm.closeDialog = closeDialog;

    function updateOffer(){
      OfferService.updateOffer(vm.offer)
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
