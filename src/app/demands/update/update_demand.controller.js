(function () {
  'use strict';
  angular
    .module('ingeSoftIi')
    .controller('UpdateDemandController',UpdateDemandController);

  /** @ngInject */
  function UpdateDemandController(DemandsService,$mdDialog,toastr) {
    var vm = this;

    vm.updateDemand = updateDemand;
    vm.closeDialog = closeDialog;

    function updateDemand(){
      DemandsService.updateDemand(vm.demand)
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
  }
})();
