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
      .when('/create_demand', {
        templateUrl: 'app/create_demand/create_demand.html',
        controller: 'CreateDemandController',
        controllerAs: 'vm'
      })
      .when('/create_offer', {
        templateUrl: 'app/create_offer/create_offer.html',
        controller: 'CreateOfferController',
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
