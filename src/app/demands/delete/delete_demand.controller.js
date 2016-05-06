(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .controller('DeleteDemandController', DeleteDemandController);

  /** @ngInject */
  function DeleteDemandController(DemandsService,$mdDialog,toastr) {
    var vm = this;

    vm.deleteDemand = deleteDemand;
    vm.closeDialog = closeDialog;

    function deleteDemand() {
      DemandsService.deleteDemand(vm.demand)
        .then(function () {
          toastr.success('La demanda fue creada con exito', 'Demanda creada');
        })
        .catch(function () {
          toastr.error('Hubo un error al intentar crear la demanda!', 'Error!');
        });
      $mdDialog.hide();
    }

    function closeDialog() {
      $mdDialog.cancel();
    }
  }
})();
