(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdSidenav) {
		var vm = this;

    vm.closeSideNavPanel = function () {
      $mdSidenav('left').close();
    };

    vm.openSideNavPanel = function () {
      $mdSidenav('left').open();
    }
	}
})();
