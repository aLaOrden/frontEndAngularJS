(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('ChatService', ChatService);

	/** @ngInject */
	function ChatService(firebase_url, $firebaseArray, $firebaseObject) {
		var chatServer = new Firebase(firebase_url);
		
		var service = {
			createUser: createUser,
			getUserConectionStatus: getUserConectionStatus,
			setUserConectionStatus: setUserConectionStatus,
			generateChatSession: generateChatSession,
			getMessagesByUser: getMessagesByUser
		};
		
		return service;
		
		function createUser(userName){
			var registry = {};
			registry[userName] = {
				isOnline: false,
				messages: {}
			};
			chatServer.set(registry);
		}
		
		function getUserConectionStatus(userName){
			return chatServer.child(userName+"/isOnline").$loaded();
		}
		
		function setUserConectionStatus(userName, status){
			var registry = {};
			registry[userName] = {isOnline: status};
			return chatServer.update(registry);
		}
		
		function generateChatSession(fromUser, toUser){
			return $firebaseArray(chatServer.child(toUser+"/messages/"+fromUser));
		}
		
		function getMessagesByUser(userName){
			return chatServer.child(userName+"/messages/");
		}
		
	}
})();
