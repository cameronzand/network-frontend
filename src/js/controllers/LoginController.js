
function LoginController ($state, UserService, $rootScope) {

  let vm = this;
  console.log('hi')

  vm.activate = activate;

  function activate (user) {
  	console.log('activate')
    UserService.login(user).then((resp) => {
      console.log(resp)
      UserService.setUser(resp.data);
      $rootScope.$broadcast('loginChange', {});
      $state.go('root.home');

    });
    
  };


};

LoginController.$inject = ['$state', 'UserService', '$rootScope'];








export { LoginController };