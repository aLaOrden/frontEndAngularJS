(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider, $mdIconProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

	$mdIconProvider
		.defaultIconSet("assets/svg/avatars.svg", 128)
		.icon("menu", "assets/svg/menu.svg", 24)
		.icon("close", "assets/svg/close.svg", 24)
		.icon("account", "assets/svg/account.svg", 24)
		.icon("key", "assets/svg/key.svg", 24)
		.icon("share", "assets/svg/share.svg", 24)
		.icon("star", "assets/svg/star.svg", 24)
		.icon("gender", "assets/svg/gender.svg", 24)
		.icon("location", "assets/svg/location.svg", 24)
		.icon("map", "assets/svg/map.svg", 24)
		.icon("chat", "assets/svg/chat.svg", 24)
		.icon("star_fill", "assets/svg/star_fill.svg", 24)
		.icon("notifications", "assets/svg/notifications.svg", 24)
		.icon("email", "assets/svg/email.svg", 24)
		.icon("add", "assets/svg/add.svg", 24)
		.icon("arrow_forward", "assets/svg/arrow_forward.svg", 24)
		.icon("phone", "assets/svg/phone.svg", 512);

	$mdThemingProvider.theme('default')
		.primaryPalette('indigo')
		.accentPalette('red');
  }

})();
