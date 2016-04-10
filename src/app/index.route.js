(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
		.when('/registro', {
			templateUrl: 'app/registro/registro.html',
			controller: 'RegistroController',
			controllerAs: 'vm'
		})

		.otherwise({
			redirectTo: '/registro'
		});
  }

})();
