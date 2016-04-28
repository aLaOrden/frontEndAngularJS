(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);
	
	/** @ngInject */
	function ViewUserController(UserService) {
		var vm = this;
		
		function loadProfile(){
			UserService.getUserByID(1)
				.then(function(profile){
					vm.profile = profile;
				});
		}
		
		loadProfile();
	}
})();
