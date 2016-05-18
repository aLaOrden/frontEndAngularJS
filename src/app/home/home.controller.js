(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('HomeController', HomeController);

	function HomeController($location) {
		var vm = this;
		vm.offersView = offersView;
		vm.demandsView = demandsView;
		vm.searchByTittle = searchByTittle;


		function offersView() {
			$location.url("/offer");
		}
		function demandsView() {
			$location.url("/demands");
		}
		function searchByTittle(){
			var destination = vm.switch ? "/offer" : "/demands";
			$location.url(destination);
			$location.search("search",vm.searchTittle);
		}
	}
})();
