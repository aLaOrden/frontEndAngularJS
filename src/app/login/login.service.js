(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('LoginService', LoginService);

	function LoginService($resource, backend_url) {
		var service = {
			makeLogin: makeLogin
		};
		
		var LoginResource =  $resource(backend_url+'/users/login', {}, {
			login: { method: 'POST' }
		});
		
		return service;
		
		function makeLogin(userData){
			return LoginResource.login(userData).$promise;
		}
	}
})();
