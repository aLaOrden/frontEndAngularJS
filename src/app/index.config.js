(function() {
  'use strict';

  angular
    .module('ingeSoftIi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider, $mdIconProvider, $mdDateLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
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
		.icon("phone", "assets/svg/phone.svg", 512)
        .icon("home", "assets/svg/home.svg", 24)
        .icon("account_box", "assets/svg/account_box.svg", 24)
        .icon("create", "assets/svg/create.svg", 24)
        .icon("shoping_car", "assets/svg/shoping_car.svg", 24)
        .icon("move_to_inbox", "assets/svg/move_to_inbox.svg", 24)
        .icon("person_add", "assets/svg/person_add.svg", 24);

	$mdThemingProvider.theme('default')
		.primaryPalette('indigo')
		.accentPalette('red');

	$mdDateLocaleProvider.months = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre"
    ];
	$mdDateLocaleProvider.shortMonths = [
		"ene.",
		"feb.",
		"mar.",
		"abr.",
		"may.",
		"jun.",
		"jul.",
		"ago.",
		"sept.",
		"oct.",
		"nov.",
		"dic."
    ];
	$mdDateLocaleProvider.days = [
		"domingo",
		"lunes",
		"martes",
		"mi\u00e9rcoles",
		"jueves",
		"viernes",
		"s\u00e1bado"
    ];
	$mdDateLocaleProvider.shortDays = [
		"dom.",
		"lun.",
		"mar.",
		"mi\u00e9.",
		"jue.",
		"vie.",
		"s\u00e1b."
    ];
  }

})();
