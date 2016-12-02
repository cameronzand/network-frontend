
function HomeController (UserService, $state) {

  let vm = this;

  vm.users = [];
  vm.goLogin = goLogin;

  function init () {
    console.log("home controller");
    UserService.allUsers().then((resp) => {
      vm.users = resp.data;
      console.log(resp)
    });

  }

  init();

  function goLogin() {
    $state.go('root.login');
  }
};

HomeController.$inject = ['UserService', '$state'];
export { HomeController };