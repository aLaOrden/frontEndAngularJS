(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('CreateDemandService', CreateDemandService);

	/** @ngInject */
	function CreateDemandService($resource,backend_url) {
		var service = {
			getDemandsByID: getDemandsByID,
			createDemand: createDemand,
			updateDemand: updateDemand,
			deleteDemand: deleteDemand
		};

		var CreateDemandResource =  $resource(backend_url+'/create_demand/:id', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});

		return service;

		function getDemandsByID(ID){
			return CreateDemandResource.show({id:ID}).$promise;
		}

		function createDemand(demand){
			return CreateDemandResource.create(demand).$promise;
		}

		function updateDemand(demand){
			return CreateDemandResource.update(demand).$promise;
		}

		function deleteDemand(demandID){
			return CreateDemandResource.delete({id:demandID}).$promise;
		}

	}
})();
