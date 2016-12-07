function MessageController (UserService) {

	console.log('messagecontroller');

	let vm = this;

	vm.convo = convo;
	vm.messages = [];
	vm.postmessages = [];


	function convo (message) {
    	UserService.postMessage(message).then(function (show){
      	vm.postmessages = show.data;
      		console.log('message:')
      		console.log(vm.messages)
        });
    };

    convo();

// 	function getChat (message) {
// 		UserService.getMessage(message).then(function (show){
//   		vm.messages = show.data;
//   			console.log('GetMessage:')
//   			console.log(vm.messages)
//     });
// };

// 	getChat();

};

MessageController.$inject = ['UserService'];
export { MessageController };