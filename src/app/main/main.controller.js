(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdSidenav,app_menu, $location) {
		var vm = this;

		vm.toggleMenu = toggleMenu;
		vm.menus = app_menu;
		vm.changeLocation = changeLocation;
        
		vm.closeSideNavPanel = function () {
          $mdSidenav('left').close();
        };
		vm.openSideNavPanel = function () {
			$mdSidenav('left').open();
		}

		function toggleMenu() {
			$mdSidenav('left').toggle();
		}
		
		function changeLocation(url){
			$location.url(url);
		}
	}
})();
