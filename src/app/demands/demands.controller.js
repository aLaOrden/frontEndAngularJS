(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('DemandsController', DemandsController);

	/** @ngInject */
	function DemandsController(DemandsService, $mdDialog, $location, $scope) {
		var vm = this;

		vm.openCreateDialog = openCreateDialog;
		vm.openViewDialog = openViewDialog;
		vm.search = {};

		function loadDemands(){
			DemandsService.getAllDemands()
				.then(function(demands){
					vm.demands = demands;
					loadFilters();
				});
		}

		function openCreateDialog($event){
			$mdDialog.show({
				controller: 'CreateDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/create/createDemand.html',
				targetEvent: $event,
				clickOutsideToClose:true
			})
			.finally(function() {
				loadDemands();
			});
		}
		
		function loadFilters(){
			if($location.search().search){
				vm.search.title = $location.search().search;
				$scope.accordion.toggle(0);
			}
		}
			
		function openViewDialog($event, demandID){
			$mdDialog.show({
				controller: 'ViewDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/view/viewDemand.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					demandID: demandID
				}
			})
			.finally(function() {
				loadDemands();
			});
		}

		loadDemands();
	}
})();
