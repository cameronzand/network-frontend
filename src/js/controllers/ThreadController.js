function ThreadController (UserService) {

	console.log('threadcontroller');

	let vm = this;

	vm.thread = {};
	



	function getThread (thread) {
		UserService.getThread(thread).then(function (show){
  		vm.thread = show.data;
  			console.log('GetThread:')
  			console.log(show.data)
    });
};

	getThread();

};

ThreadController.$inject = ['UserService'];
export { ThreadController };