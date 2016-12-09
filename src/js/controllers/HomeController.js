
function HomeController (UserService, $state) {

  let vm = this;

  vm.users = [];
  vm.goLogin = goLogin;
  vm.events =[];

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

function Events() {
  UserService.getEvents().then((resp) => {
    vm.events = resp.data;
    console.log('Events:',resp.data);
  });
}
Events();

};


HomeController.$inject = ['UserService', '$state'];
export { HomeController };