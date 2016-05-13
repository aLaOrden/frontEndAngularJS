(function() {
	'use strict';

	angular
		.module('ingeSoftIi')
		.service('ChatService', ChatService);

	/** @ngInject */
	function ChatService($firebaseArray,firebase_url) {
		var firebaseServer = new Firebase(firebase_url);
		var service = {
			getMessages: getMessages
		};
		
		return service;
		
		
		function getMessages(){
			return $firebaseArray(firebaseServer);
		}
		
	}
})();
