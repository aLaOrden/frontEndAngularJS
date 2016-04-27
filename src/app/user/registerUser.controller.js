(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('RegisterUserController', RegisterUserController);

	function RegisterUserController(UserService) {
		var vm = this;
		
		vm.genders = UserService.getAllGenders();
	}
})();
