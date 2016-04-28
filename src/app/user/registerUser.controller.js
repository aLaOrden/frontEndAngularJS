(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('RegisterUserController', RegisterUserController);
	
	/** @ngInject */
	function RegisterUserController(UserService, toastr) {
		var vm = this;
		
		vm.profile = {gender: "M", admin: false};
		vm.genders = UserService.getAllGenders();
		vm.registerUser = registerUser;
		
		function registerUser(){
			UserService.createUser(vm.profile)
				.then(function(){
					toastr.success('El usuario fue registrado con exito', 'Oferta creada');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar registrar el usuario!', 'Error!');
				});
		}
	}
})();
