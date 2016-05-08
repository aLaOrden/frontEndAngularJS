(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);
	
	/** @ngInject */
	function ViewUserController(UserService, $location, toastr) {
		var vm = this;
		
		function loadProfile(profileID){
			UserService.getUserByID(profileID)
				.then(function(profile){
					vm.profile = profile;
				});
		}
		
		function detectProfile(){
			if($location.search().id){
				var profileID = $location.search().id;
				loadProfile(profileID);
			}
			else{
				try{
					var profileID = JSON.parse(sessionStorage.user).id;
					loadProfile(profileID);
				}
				catch(err){
					toastr.error('Hubo un error al cargar los datos del usuario!', 'Error!');
				}
			}
		}
		
		detectProfile();
		
	}
})();
