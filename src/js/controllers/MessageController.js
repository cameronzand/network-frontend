function MessageController (UserService, $stateParams) {

	console.log('messagecontroller');

	let vm = this;

	vm.getConvo = getConvo;
  	vm.postComment = postComment;
	vm.messages = [];
	vm.content = '';


	function postComment () {
	  console.log(vm.content);
      let user_id = $stateParams.id
    	UserService.postComment(vm.content, user_id).then(function (resp){
    		console.log(resp.data);
    		// add the new message to messages
    		vm.messages.push(resp.data);
        });
    };

	function getConvo (message) {
    let user_id = $stateParams.id
		UserService.getConvo(message, user_id).then(function (show){
  		vm.messages = show.data;
  			console.log('GetMessage:')
  			console.log(show.data)
    });
};

	getConvo();

};

MessageController.$inject = ['UserService', '$stateParams'];
export { MessageController };