function LayoutController () {
  //console.log("LAYOUT CONTROLLER IS ALIVE");

  let vm = this;

  vm.message = 'Hello from LayoutController!';
  vm.clickMe = clickMe;

  function clickMe () {
    //console.log("I got clicked");
  }
}

LayoutController.$inject = [];



export { LayoutController };