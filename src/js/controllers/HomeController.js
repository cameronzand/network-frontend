function HomeController () {
  //console.log("HOME CONTROLLER IS ALIVE");

  let vm = this;

  vm.message = 'Hello from HomeController!';
  vm.clickMe = clickMe;

  function clickMe () {
    //console.log("I got clicked");
  }
}

HomeController.$inject = [];



export { HomeController };