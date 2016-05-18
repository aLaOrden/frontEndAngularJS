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
				.then(function(userInfo){
					sessionStorage.user = angular.toJson(userInfo);
					$rootScope.$emit("runChat");
					$rootScope.$emit("login");
					redirect('/offer');
				})
				.catch(function(error){
					if(error.status === 403){
						toastr.error('Nombre de usuario o contraseña incorrectas!', 'Error!');
					}
					else{
						toastr.error('Hubo un error al intentar acceder a su cuenta!', 'Error!');
					}
				});
		}
		
		function redirect(location){
			$location.url(location);
		}
		
		function detectSession(){
			if($location.url() === "/logout"){
				$rootScope.$emit("stopChat");
				sessionStorage.removeItem("user");
				$rootScope.$emit("logout");
			}
		}
		detectSession()
		
	}
})();
