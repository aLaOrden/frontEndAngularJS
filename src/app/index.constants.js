(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .constant('backend_url', "http://alaorden-rest.herokuapp.com")
    .constant('app_menu', [
    {
      name: "Página principal",
      url: "/home"
    },
	{
      name: "Mi perfil",
      url: "/viewUser"
    },
    {
      name: "Ofertas",
      url: "/offer"
    },
    {
      name: "Demandas",
      url: "/demands"
    },
    {
      name: "Iniciar sesíon",
      url: "/login"
    }
  ]);

})();
