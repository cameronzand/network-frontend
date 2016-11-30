function LayoutController (UserService, $rootScope, $state) {

  let vm = this;

  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    console.log(vm.loggedIn)
  });

  function logout () {
  	UserService.logout();
  	$state.go('root.login');
   
  }
}

LayoutController.$inject = ['UserService', '$rootScope', '$state'];



export { LayoutController };