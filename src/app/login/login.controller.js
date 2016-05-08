(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('LoginController', LoginController);

	function LoginController(LoginService, $location, toastr, $rootScope) {
		var vm = this;
		
		vm.userData = {};
		vm.login = login;
		vm.redirect = redirect;
		
		function login(){
			LoginService.makeLogin(vm.userData)
				.then(function(auth){
					if(auth.access === "denied"){
						toastr.error('Nombre de usuario o contraseña incorrectas!', 'Error!');
					}
					else{
						sessionStorage.user = angular.toJson(auth);
						$rootScope.$emit("login");
						redirect('/offer');
					}
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar acceder a su cuenta!', 'Error!');
				});
		}
		
		function redirect(location){
			$location.url(location);
		}
		
		function detectSession(){
			if($location.url() === "/logout"){
				sessionStorage.removeItem("user");
				$rootScope.$emit("logout");
			}
		}
		detectSession()
		
	}
})();
