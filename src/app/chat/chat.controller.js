(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.controller('ChatController', ChatController);

	/** @ngInject */
	function ChatController(ChatService) {
		var vm = this;
		
		vm.sendMessage = sendMessage;
		vm.startChat = startChat;
		
		var fromUser = angular.fromJson(sessionStorage.user).username;
		
		function startChat(toUser){
			vm.messages = ChatService.generateChatSession(fromUser, toUser);
		}
		
		function sendMessage(keyEvent){
			if(!vm.message || keyEvent && keyEvent.which !== 13){
				return;
			}
			vm.messages.$add({
                from: fromUser,
                body: vm.message
            });
			vm.message = "";
		}
		
		function chatListener(){
			vm.userMessages = ChatService.getMessagesByUser(fromUser)
				.on('child_changed',function(childSnapshot) {
					var toUser = childSnapshot.key();
					vm.messages = ChatService.generateChatSession(toUser, fromUser);
				});
		}
		
		chatListener();
	}
})();
