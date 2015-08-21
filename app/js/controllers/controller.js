appControllers.controller('streamCtrl', ['$scope', 'socket',
	function streamCtrl ($scope, socket) {
		
		$scope.getQuestion = function()
		{
			socket.emit('stream-io:getquestion', true);

		}
    }
]);
