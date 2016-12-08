function MessageController (UserService, $stateParams, $rootScope) {

  getConvo();

	console.log('messagecontroller');

	let vm = this;

	vm.getConvo = getConvo;
  vm.postComment = postComment;
	vm.messages = [];
	vm.content = '';
  vm.intervalId = setInterval(getConvo, 3000);


  $rootScope.$on('$stateChangeStart', (event, toState) => {

    clearInterval(vm.intervalId);

  });


	function postComment () {
	  console.log(vm.content);
      let user_id = $stateParams.id
    	UserService.postComment(vm.content, user_id).then(function (resp){
    		console.log(resp.data);
    		// add the new message to messages
    		vm.messages.push(resp.data);

        });
      vm.content = '';
    };

	function getConvo (message) {
    let user_id = $stateParams.id
		UserService.getConvo(message, user_id).then(function (show){
  		vm.messages = show.data;
  			console.log('GetMessage:')
  			console.log(show.data)
    });
};

	
};

MessageController.$inject = ['UserService', '$stateParams', '$rootScope'];
export { MessageController };