(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdSidenav,app_menu, $location, $rootScope, $scope, ChatService) {
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
		
		var onLogin = $rootScope.$on("login",showLogout);
		var onLogout = $rootScope.$on("logout",showLogin);
		
		$scope.$on('$destroy', function(){
			onLogin();
			onLogout();
		});
		
		console.log(ChatService.getMessages());
	}
})();