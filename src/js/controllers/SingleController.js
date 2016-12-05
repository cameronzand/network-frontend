function SingleController (UserService, $stateParams, $state) {

  let vm = this;

  vm.users = [];
  vm.nearby = [];
  vm.remove = remove;

  function init () {
    UserService.getUser($stateParams.id).then((resp) => {
      vm.user = resp.data;
      //console.log('singleuser:')
      //console.log(resp)
    });
  };

  init();

  function nearby (nearbyuser) {
    UserService.getNearby(nearbyuser).then(function (show){
      vm.nearby = show.data;
      console.log('nearby:')
      console.log(vm.nearby)
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

SingleController.$inject = ['UserService', '$stateParams', '$state'];
export { SingleController };