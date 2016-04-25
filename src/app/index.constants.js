(function() {
  'use strict';

	angular
		.module('ingeSoftIi')
		.constant('backend_url', "http://localhost:8080/a_la_orden")
		.constant('app_menu', [
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
