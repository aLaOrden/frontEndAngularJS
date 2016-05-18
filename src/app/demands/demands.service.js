(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('DemandsService', DemandsService);

	/** @ngInject */
	function DemandsService($resource,backend_url) {
		var service = {
			getAllDemands: getAllDemands,
			getDemandsByID: getDemandsByID,
			createDemand: createDemand,
			updateDemand: updateDemand,
			deleteDemand: deleteDemand
		};
		
		var DemandResource =  $resource(backend_url+'/demands/:id', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
		
		return service;
		
		function getAllDemands(){
			return DemandResource.query().$promise;
		}
		
		function getDemandsByID(ID){
			return DemandResource.show({id:ID}).$promise;
		}
		
		function createDemand(demand){
			demand = angular.copy(demand);
			demand.deadline = demand.deadline.getTime();
			return DemandResource.create(demand).$promise;
		}
		
		function updateDemand(demand){
			return DemandResource.update(demand).$promise;
		}
		
		function deleteDemand(demandID){
			return DemandResource.delete({id:demandID}).$promise;
		}
		
	}
})();
