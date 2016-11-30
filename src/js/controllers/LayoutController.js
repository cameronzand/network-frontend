function LayoutController (UserService) {
  //console.log("LAYOUT CONTROLLER IS ALIVE");

  let vm = this;

  vm.logout = logout;

  function logout () {
  	UserService.logout();
   
  }
}

LayoutController.$inject = ['UserService'];



export { LayoutController };