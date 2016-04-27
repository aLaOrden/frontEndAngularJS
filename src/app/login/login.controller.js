(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('LoginController', LoginController);

	function LoginController(LoginService, $location, toastr) {
		var vm = this;
		
		vm.userData = {};
		vm.login = login;
		vm.redirect = redirect;
		
		function login(){
			LoginService.makeLogin(vm.userData)
				.then(function(){
					$location.url('/offer');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar acceder a su cuenta!', 'Error!');
				});
		}
		
		function redirect(location){
			$location.url(location);
		}
	}
})();
