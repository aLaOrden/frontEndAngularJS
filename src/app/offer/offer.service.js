(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('OfferService', OfferService);

	/** @ngInject */
	function OfferService($resource,backend_url) {
		var service = {
			getAllOffers: getAllOffers,
			getOffersByID: getOffersByID,
			createOffer: createOffer,
			updateOffer: updateOffer,
			deleteOffer: deleteOffer
		};
		
		var OfferResource =  $resource(backend_url+'/offers/:id', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
		
		return service;
		
		function getAllOffers(){
			return OfferResource.query().$promise;
		}
		
		function getOffersByID(ID){
			return OfferResource.show({id:ID}).$promise;
		}
		
		function createOffer(offer){
			offer.deadline = offer.deadline.getTime();
			return OfferResource.create(offer).$promise;
		}
		
		function updateOffer(offer){
			return OfferResource.update(offer).$promise;
		}
		
		function deleteOffer(offerID){
			return OfferResource.delete({id:offerID}).$promise;
		}
	}
})();
