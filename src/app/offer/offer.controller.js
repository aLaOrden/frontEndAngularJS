(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('OfferController', OfferController);

	/** @ngInject */
	function OfferController(OfferService, $mdDialog) {
		var vm = this;
		
		vm.openCreateDialog = openCreateDialog;
		
		function loadOffers(){
			OfferService.getAllOffers()
				.then(function(offers){
					vm.offers = offers;
				});
		}
		
		function openCreateDialog($event){			
			$mdDialog.show({
				controller: 'CreateOfferController',
				controllerAs: 'vm',
				templateUrl: 'app/offer/create/create_offer.html',
				targetEvent: $event,
				clickOutsideToClose:true
			});
		}
		
		loadOffers();
	}
})();
