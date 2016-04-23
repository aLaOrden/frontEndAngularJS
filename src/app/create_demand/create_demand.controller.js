(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('CreateDemandController', CreateDemandController);

	/** @ngInject */
	function CreateDemandController(CreateDemandsService) {
		var vm = this;

		function loadDemands(){
      CreateDemandsService.getAllDemands()
				.then(function(demands){
					vm.demands = demands;
				});
		}

		loadDemands();
	}
})();
