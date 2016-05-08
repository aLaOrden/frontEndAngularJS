(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdSidenav,app_menu, $location, $rootScope) {
		var vm = this;

		vm.toggleMenu = toggleMenu;
		vm.changeLocation = changeLocation;

		function toggleMenu() {
			$mdSidenav('left').toggle();
		}

		function changeLocation(url){
			$location.url(url);
		}
		
		function showLogout(){
			vm.menus = _.reject(app_menu, function(menu){
				return menu.url === "/login" || menu.url === "/register";
			});
		}
		
		function showLogin(){
			vm.menus = _.reject(app_menu, function(menu){
				return menu.url === "/logout" || menu.url === "/viewUser";
			});
		}
		
		function detectSession(){
			if(sessionStorage.user && $location.url() !== "/logout"){
				showLogout()
			}
			else{
				showLogin();
			}
		}
		
		detectSession();
		
		$rootScope.$on("login",showLogout);
		$rootScope.$on("logout",showLogin);
	}
})();