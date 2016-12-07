function MessageController (UserService, $stateParams) {

	console.log('messagecontroller');

	let vm = this;

	vm.getConvo = getConvo;
  vm.postComment = postComment;
	vm.messages = [];
	vm.postmessages = [];


	function postComment (message) {
      let user_id = $stateParams.id
    	UserService.postMessage(message, user_id).then(function (show){
      	vm.postmessages = show.data;
      		console.log('message:')
      		console.log(vm.messages)
        });
    };

    // postComment();

	function getConvo (message) {
    let user_id = $stateParams.id
		UserService.getConvo(message, user_id).then(function (show){
  		vm.messages = show.data;
  			console.log('GetMessage:')
  			console.log(show)
    });
};

	getConvo();

};

MessageController.$inject = ['UserService', '$stateParams'];
export { MessageController };