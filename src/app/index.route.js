(function () {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
<<<<<<< HEAD
		.when('/registro', {
			templateUrl: 'app/registro/registro.html',
			controller: 'RegistroController',
			controllerAs: 'vm'
		})

		.otherwise({
			redirectTo: '/registro'
		});
=======
    .when('/offer', {
      templateUrl: 'app/offer/offer.html',
      controller: 'OfferController',
      controllerAs: 'vm'
    })
    .when('/demands', {
      templateUrl: 'app/demands/demands.html',
      controller: 'DemandsController',
      controllerAs: 'vm'
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
	.when('/viewUser', {
      templateUrl: 'app/user/viewUser.html',
      controller: 'ViewUserController',
      controllerAs: 'vm'
    })
    .otherwise({
        redirectTo: '/home'
    });
>>>>>>> development
  }

})();
