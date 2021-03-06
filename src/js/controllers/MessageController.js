function MessageController (UserService, $stateParams, $rootScope) {

  getConvo();

	console.log('messagecontroller');

	let vm = this;

	vm.getConvo = getConvo;
  vm.postComment = postComment;
	vm.messages = [];
	vm.content = '';
  vm.intervalId = setInterval(getConvo, 3000);
  vm.sender;
  vm.recip;


  $rootScope.$on('$stateChangeStart', (event, toState) => {

    clearInterval(vm.intervalId);

  });


	function postComment () {
	  console.log(vm.content);
      let user_id = $stateParams.id
    	UserService.postComment(vm.content, user_id).then(function (resp){
    		console.log("This is da data" ,  resp.data);
    		vm.messages.push(resp.data);

        });
      vm.content = '';
    };

	function getConvo (message) {

    let user_id = $stateParams.id
    console.log('user id is: ', user_id, typeof(user_id))
		UserService.getConvo(message, user_id).then(function (show){
  		vm.messages = show.data.reverse();

  
     // get the id of the last message
     // let el = document.querySelector('#mail-259');
     //  el.scrollIntoView(false);

     console.log("messages array: ", vm.messages)


      vm.sender = show.data[0].sender_id
      vm.recip = show.data[0].recipient_id

  			console.log('GetMessage:')
  			console.log(show.data)
        console.log(vm.sender, vm.recip)
    });
};

 

	
};

MessageController.$inject = ['UserService', '$stateParams', '$rootScope'];
export { MessageController };