(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ViewUserController', ViewUserController);

	/** @ngInject */
	function ViewUserController(UserService, ChatService, $location, toastr, $mdDialog) {
		var vm = this;

		vm.openEditDemandDialog = openEditDemandDialog;
		vm.openDeleteDemandDialog = openDeleteDemandDialog;
		vm.openEditOfferDialog = openEditOfferDialog;
		vm.openDeleteOfferDialog = openDeleteOfferDialog;
		vm.openEditProfileDialog = openEditProfileDialog;
		vm.startChar = startChar;
		
		
		function loadProfile(profileID){
			UserService.getUserByID(profileID)
				.then(function(profile){
					vm.profile = profile;
					ChatService.getUserConectionStatus(profile.username)
						.then(function(isOnline){
							vm.profile.isOnline = isOnline;
						});
				});
		}
		
		function openEditOfferDialog($event, offerID){
			$mdDialog.show({
				controller: 'UpdateOfferController',
				controllerAs: 'vm',
				templateUrl: 'app/offer/update/update_offer.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					offerID: offerID
				}
			})
			.finally(detectProfile);
		}
		
		function openDeleteOfferDialog($event, offerID){
			$mdDialog.show({
				controller: 'DeleteOfferController',
				controllerAs: 'vm',
				templateUrl: 'app/offer/delete/delete_offer.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					offerID: offerID
				}
			})
			.finally(detectProfile);
		}
		
		function openEditDemandDialog($event, demandID){
			$mdDialog.show({
				controller: 'UpdateDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/update/update_demand.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					demandID: demandID
				}
			})
			.finally(detectProfile);
		}
		

		function openDeleteDemandDialog($event, demandID){
			$mdDialog.show({
				controller: 'DeleteDemandController',
				controllerAs: 'vm',
				templateUrl: 'app/demands/delete/delete_demand.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					demandID: demandID
				}
			})
			.finally(detectProfile);
		}
		
		function openEditProfileDialog($event){
			$mdDialog.show({
				controller: 'EditProfileController',
				controllerAs: 'vm',
				templateUrl: 'app/user/edit/edit_profile.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					userID: vm.profile.id
				}
			})
			.finally(detectProfile);
		}
		
		function startChar(){
			var fromUser = angular.fromJson(sessionStorage.user).username;
			var toUser = vm.profile.username;
			$location.url("/chat");
			$location.search("fromUser",fromUser);
			$location.search("toUser",toUser);
		}
		
		function detectProfile(){
			var profileID;
			if($location.search().id){
				profileID = $location.search().id;
				loadProfile(profileID);
				vm.showEdit = false;
			}
			else{
				vm.showEdit = true;
				try{
					profileID = angular.fromJson(sessionStorage.user).id;
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
