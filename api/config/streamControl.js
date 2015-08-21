
var io = require('../app').io;
var SOCKETIO_GET_QUESTION = 'stream-io:getquestion';
var xml = require('xml');
var fs = require('fs');

var getQuestion = function() {
	var xmlUpdate = [ {  items: [ { timestamp: (new Date).getTime() } ,{ cTitle1: '1111' } , { cTitle2: '5555' }, { game: 'poof' },
		{ mTex21: 'mText1' },
		{ mText2: 'mText2' },
		{ mText3: 'mText3' },
		{ mText4: 'mText4' },
		{ pName1: 'pN11ame1' },
		{ pName2: '' },
		{ pScore1: 'pScore1' },
		{ pScore2: 'pScore2' },
		{ rounds: 'xxx' }
	] } ];

	console.log(xml(xmlUpdate, true));
	fs.writeFile("C:\\Program Files (x86)\\SplitmediaLabs\\XSplit Broadcaster\\streamcontrol.xml", xml(xmlUpdate, true));
}

io.sockets.on('connection', function(socket) {
socket.on(SOCKETIO_GET_QUESTION,getQuestion);

});