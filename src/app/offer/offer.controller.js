(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('OfferController', OfferController);

	/** @ngInject */
	function OfferController(OfferService, $mdDialog, $location, $scope) {
		var vm = this;
		
		vm.openCreateDialog = openCreateDialog;
		vm.search = {};
		
		function loadOffers(){
			OfferService.getAllOffers()
				.then(function(offers){
					vm.offers = offers;
					loadFilters();
				});
		}
		
		function openCreateDialog($event){			
			$mdDialog.show({
				controller: 'CreateOfferController',
				controllerAs: 'vm',
				templateUrl: 'app/offer/create/createOffer.html',
				targetEvent: $event,
				clickOutsideToClose:true
			})
			.finally(function() {
				loadOffers();
			});
		}
		
		function loadFilters(){
			if($location.search().search){
				vm.search.title = $location.search().search;
				$scope.accordion.toggle(0);
			}
		}
		
		loadOffers();
	}
})();
