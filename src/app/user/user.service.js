(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('UserService', UserService);
	
	/** @ngInject */
	function UserService($resource, backend_url) {
		var service = {
			getAllUsers: getAllUsers,
			getUserByID: getUserByID,
			createUser: createUser,
			updateUser: updateUser,
			deleteUser: deleteUser
		};
		
		var UserResource =  $resource(backend_url+'/users/:id', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
		
		return service;
		
		function getAllUsers(){
			return UserResource.query().$promise;
		}
		
		function getUserByID(ID){
			return UserResource.show({id:ID}).$promise;
		}
		
		function createUser(User){
			return UserResource.create(User).$promise;
		}
		
		function updateUser(User){
			return UserResource.update(User).$promise;
		}
		
		function deleteUser(UserID){
			return UserResource.delete({id:UserID}).$promise;
		}
		
	}
})();
