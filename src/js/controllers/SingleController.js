function SingleController (UserService, $stateParams, $state) {

  let vm = this;

  vm.users = [];
  vm.remove = remove;

  function init () {
    UserService.getUser($stateParams.id).then((resp) => {
      vm.user = resp.data;
      //console.log(resp)
    });
  };

  init();

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

SingleController.$inject = ['UserService', '$stateParams', '$state'];
export { SingleController };