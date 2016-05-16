(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('HomeController', HomeController);

	function HomeController($location) {
		var vm = this;
		vm.offersView = offersView;
		vm.demandsView = demandsView;


    function offersView() {
      $location.url("/offer");
    }
    function demandsView() {
      $location.url("/demands");
    }
  }
})();
