function RegisterController (UserService, $state) {

  let vm = this;

  vm.createUser = createUser;

  function createUser (user) {
    UserService.create(user).then((resp) => {
      console.log('User: ', resp);
      $state.go('root.single', {id: resp.data.id});
      // startUpdates();
    });
  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };