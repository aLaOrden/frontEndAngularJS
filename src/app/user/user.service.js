(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('UserService', UserService);
	
	/** @ngInject */
	function UserService(frontend_url) {
		var service = {
			cargarPerfil: cargarPerfil 
		};
		
		return service;
		
		function cargarPerfil(){
			var perfil = {
				nombre: "Elber Galarga",
				email: "micorreo@example.com",
				celular: 310101011,
				genero: "Masculino",
				foto: frontend_url+"/assets/images/angular.png"
			};
			
			return perfil;
		}
		
	}
})();
