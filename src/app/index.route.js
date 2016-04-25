(function () {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
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
      .otherwise({
        redirectTo: '/offer'
      });
  }

})();
