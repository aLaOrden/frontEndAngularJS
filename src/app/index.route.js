(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
    .when('/profile', {
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
      templateUrl: 'app/login/user.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .when('/user', {
      templateUrl: 'app/user/user.html',
      controller: 'UserController',
      controllerAs: 'vm'
    })
		.otherwise({
			redirectTo: '/offer'
		});
  }

})();
