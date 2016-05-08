(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .constant('backend_url', "http://alaorden-rest.herokuapp.com")
    .constant('app_menu', [
    {
      name: "Página principal",
      img: "home",
      url: "/home"
    },
	{
      name: "Mi perfil",
      img: "account_box",
      url: "/viewUser"
    },
	{
      name: "Registrar",
      img: "create",
      url: "/register"
    },
    {
      name: "Ofertas",
      img: "shoping_car",
      url: "/offer"
    },
    {
      name: "Demandas",
      img: "move_to_inbox",
      url: "/demands"
    },
    {
      name: "Iniciar sesión",
      img: "person_add",
      url: "/login"
    },
    {
      name: "Cerrar sesión",
      img: "person_outline",
      url: "/logout"
    }
  ]);

})();
