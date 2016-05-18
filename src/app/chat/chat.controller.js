(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ChatController', ChatController);

	/** @ngInject */
	function ChatController(ChatService, $location) {
		var vm = this;
		
		vm.sendMessage = sendMessage;
		
		function sendMessage(keyEvent){
			if(!vm.message || keyEvent && keyEvent.which !== 13){
				return;
			}
			var fromUser = angular.fromJson(sessionStorage.user).username;
			vm.messages.$add({
                from: fromUser,
                body: vm.message
            });
			vm.message = "";
		}
		
		function startChat(){
			var fromUser = $location.search().fromUser;
			var toUser = $location.search().toUser;
			vm.messages = ChatService.generateChatSession(fromUser, toUser);
		}
		
		startChat();
	}
})();
