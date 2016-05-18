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
				templateUrl: 'app/offer/create/createOffer.html',
				targetEvent: $event,
				clickOutsideToClose:true
			})
			.finally(function() {
				loadOffers();
			});
		}
		
		loadOffers();
	}
})();
