(function () {
  'use strict';
  angular
    .module('ingeSoftIi')
    .controller('UpdateDemandController',UpdateDemandController);

  /** @ngInject */
  function UpdateDemandController(DemandsService,$mdDialog,toastr, demandID) {
    var vm = this;

    vm.updateDemand = updateDemand;
    vm.closeDialog = closeDialog;

    function updateDemand(){
      DemandsService.updateDemand(vm.demand)
        .then(function(){
          toastr.success('La demanda fue actualizada con exito', 'Demanda actualizada');
        })
        .catch(function(){
          toastr.error('Hubo un error al intentar actualizar la demanda!', 'Error!');
        });
      $mdDialog.hide();
    }
	
	function loadDemand(){
		DemandsService.getDemandsByID(demandID)
			.then(function(demand){
				demand.deadline = new Date(demand.deadline);
				vm.demand = demand;
			});
    }
	
    function closeDialog(){
      $mdDialog.cancel();
    }
	
	loadDemand();
  }
})();
