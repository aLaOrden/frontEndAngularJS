(function () {
  'use strict';
  angular
    .module('ingeSoftIi')
    .controller('EditProfileController',EditProfileController);

  /** @ngInject */
  function EditProfileController(UserService,$mdDialog,toastr,userID) {
    var vm = this;

    vm.updateUser = updateUser;
    vm.closeDialog = closeDialog;
	vm.genders = UserService.getAllGenders();

    function updateUser(){
      UserService.updateUser(vm.profile)
        .then(function(){
          toastr.success('El usuario fue actualizado con exito', 'Usuario actualizado');
        })
        .catch(function(){
          toastr.error('Hubo un error al intentar actualizar el usuario!', 'Error!');
        });
      $mdDialog.hide();
    }
	
	function loadUser(){
		UserService.getUserByID(userID)
			.then(function(profile){
				vm.profile = profile;
			});
    }
	
    function closeDialog(){
      $mdDialog.cancel();
    }
	
	loadUser();
  }
})();