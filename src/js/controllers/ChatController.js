function ChatController (UserService, $stateParams, $state) {

  let vm = this;

  vm.users = [];
  vm.nearby = [];
  vm.chatUsers=chatUsers
  vm.remove = remove;

function init () {
    // console.log("home controller");
    UserService.allUsers().then((resp) => {
      vm.users = resp.data;
      console.log(resp)
    });

  }

  init();

  function chatUsers() {
    $state.go('root.chat');
  }
  init();

  function nearby (user) {
    UserService.getNearby(user).then(function (show){
      vm.nearby = show.data;
      console.log('nearby:')
      console.log(show)
    });
  };

  nearby();

  	function remove (user) {
        UserService.deleteUser(user).then(function (resp) {
      		console.log(resp);
      	vm.users = vm.users.filter(function (x) {
       		 return x.id !== user.id;

        });

     	});
     	$state.go('root.register');
  	};

}

ChatController.$inject = ['UserService', '$stateParams', '$state'];
export { ChatController };