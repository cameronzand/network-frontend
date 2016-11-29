
function HomeController (UserService) {

  let vm = this;

  vm.users = [];

  function init () {
    console.log("home controller");
    UserService.allUsers().then((resp) => {
      vm.users = resp.data;
      console.log(resp)
    });

  }

  init();
};

HomeController.$inject = ['UserService'];
export { HomeController };