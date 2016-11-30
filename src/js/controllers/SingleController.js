function SingleController (UserService, $stateParams) {

  let vm = this;

  vm.user = {};

  function init () {
    UserService.getUser($stateParams.id).then((resp) => {
      vm.user = resp.data;
      //console.log(resp)
    });
  };

  init();
}

SingleController.$inject = ['UserService', '$stateParams'];
export { SingleController };