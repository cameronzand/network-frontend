function LayoutController (UserService, $rootScope, $state) {

  let vm = this;

  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    console.log(vm.loggedIn)
  });

  function logout () {
  	UserService.logout();
  	vm.loggedIn = false;
  }

 
if (navigator.geolocation) {
  var timeoutVal = 10 * 1000 * 1000;
  navigator.geolocation.getCurrentPosition(
    displayPosition, 
    displayError,
    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
  );
}
else {
  alert("Geolocation is not supported by this browser");
}

function displayPosition(position) {
  console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}

function displayError(error) {
  var errors = { 
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}




}

LayoutController.$inject = ['UserService', '$rootScope', '$state'];



export { LayoutController };