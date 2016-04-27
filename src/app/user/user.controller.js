(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('UserController', UserController);
	
	/** @ngInject */
	function UserController(UserService) {
		var vm = this;
		
		function iniciarPerfil(){
			vm.datosUsusario = UserService.cargarPerfil();
		}
		
		iniciarPerfil();
	}
})();
