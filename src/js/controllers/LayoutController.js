function LayoutController (UserService, $rootScope, $state) {

  let vm = this;

  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;
  vm.internalId = null; 

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    console.log(vm.loggedIn)
    startUpdates()
  });

  function logout () {
  	UserService.logout();
  	vm.loggedIn = false;
  	clearInterval(vm.intervalId)
  	vm.intervalId = null;
  }

  function startUpdates () {
  	vm.intervalId = setInterval(updateLoc, 50000)

  }
 

 function updateLoc () {
	if (navigator.geolocation) {
		console.log('there is geolation');
	  navigator.geolocation.getCurrentPosition(position => {
	  	let location = {};
	  	location.latitude = position.coords.latitude;
	  	location.longitude = position.coords.longitude;
	  	UserService.postLoc(location).then(function (data){
	  		console.log(data);
	  		console.log(location);
	  	});
	  })
	}
	else {
	  alert("Geolocation not supported by this browser, use something else besides Internet Explorer!");
	}
}





};

LayoutController.$inject = ['UserService', '$rootScope', '$state'];



export { LayoutController };