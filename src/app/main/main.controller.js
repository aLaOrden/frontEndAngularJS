(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(ChatService, $mdSidenav, app_menu, $location, $rootScope, $scope, toastr, $mdDialog) {
		var vm = this;
		
		var chatListener;
		vm.toggleMenu = toggleMenu;
		vm.changeLocation = changeLocation;

		function toggleMenu() {
			$mdSidenav('left').toggle();
		}

		function changeLocation(url){
			$location.url(url);
			toggleMenu();
		}
		
		function showLogout(){
			vm.menus = _.reject(app_menu, function(menu){
				return menu.url === "/login" || menu.url === "/register";
			});
		}
		
		function showLogin(){
			vm.menus = _.reject(app_menu, function(menu){
				return menu.url === "/logout" || menu.url === "/viewUser";
			});
		}
		
		function startChatListener(){
			ChatService.setUserConectionStatus(true);
			chatListener = ChatService.startChatListener(redirectChat);			
		}
		
		function stopChatListener(){
			ChatService.setUserConectionStatus(false);
			ChatService.stopChatListener(chatListener);
		}
		
		function redirectChat(chatRegister) {
			if($location.url().indexOf("/chat") !== 0){
				var fromUser = chatRegister.key();
				
				var confirmChat = $mdDialog.confirm()
					.title("Solicitud de chat entrante")
					.textContent("El usuario "+fromUser+" desea chatear contigo")
					.ok("Iniciar chat")
					.cancel("Ignorar");
					
				$mdDialog.show(confirmChat).then(function() {
					var toUser = angular.fromJson(sessionStorage.user).username;
					$location.url("/chat");
					$location.search("fromUser",fromUser);
					$location.search("toUser",toUser);
				}, function() {
					toastr.info("El chat del usuario "+fromUser+" ha sido ignorado");
				});
			}
		}
		
		function detectSession(){
			if(sessionStorage.user && $location.url() !== "/logout"){
				showLogout();
				startChatListener();
			}
			else{
				showLogin();
			}
		}
		
		detectSession();
		
		var onLogin = $rootScope.$on("login",showLogout);
		var onLogout = $rootScope.$on("logout",showLogin);
		var runChat = $rootScope.$on("runChat",startChatListener);
		var stopChat = $rootScope.$on("stopChat",stopChatListener);
		
		$scope.$on('$destroy', function(){
			onLogin();
			onLogout();
			runChat();
			stopChat();
		});
	}
})();