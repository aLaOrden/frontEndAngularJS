(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('ChatService', ChatService);

	/** @ngInject */
	function ChatService(firebase_url, $firebaseArray) {
		var chatServer = new Firebase(firebase_url);
		
		var service = {
			createUser: createUser,
			getUserConectionStatus: getUserConectionStatus,
			setUserConectionStatus: setUserConectionStatus,
			generateChatSession: generateChatSession,
			getMessagesByUser: getMessagesByUser,
			startChatListener: startChatListener,
			stopChatListener: stopChatListener
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
			var query = chatServer.child(userName+"/isOnline");
			return $firebaseArray(query).$loaded();
		}
		
		function setUserConectionStatus(status){
			var registry = {};
			var userName = angular.fromJson(sessionStorage.user).username;
			registry[userName] = {isOnline: status};
			return chatServer.update(registry);
		}
		
		function generateChatSession(fromUser, toUser){
			return $firebaseArray(chatServer.child(toUser+"/messages/"+fromUser));
		}
		
		function getMessagesByUser(userName){
			return chatServer.child(userName+"/messages/");
		}
		
		function stopChatListener(listener){
			chatServer.off('child_changed',listener);
		}
		
		function startChatListener(callback){
			var fromUser = angular.fromJson(sessionStorage.user).username;
			getMessagesByUser(fromUser).on('child_changed',callback);
		}
		
	}
})();
