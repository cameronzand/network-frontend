
function LoginController ($state, UserService) {

  let vm = this;

  this.activate = activate;

  function activate (user) {
    UserService.login(user).then((resp) => {
      console.log(resp)
      $state.go('root.home');
    });
  };


};

LoginController.$inject = ['$state', 'UserService'];








export { LoginController };