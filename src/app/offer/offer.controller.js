(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('OfferController', OfferController);

	/** @ngInject */
	function OfferController(OfferService, $mdDialog, $location, $scope) {
		var vm = this;
		
		vm.openCreateDialog = openCreateDialog;
		vm.openViewDialog = openViewDialog;
		vm.search = {};
		
		function loadOffers(){
			OfferService.getAllOffers()
				.then(function(offers){
					vm.offers = offers;
					loadFilters();
				});
		}
		
		function openViewDialog($event, offerID){
			$mdDialog.show({
				controller: 'ViewOfferController',
				controllerAs: 'vm',
				templateUrl: 'app/offer/view/viewOffer.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					offerID: offerID
				}
			})
			.finally(function() {
				loadOffers();
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
