function LayoutController (UserService, $rootScope, $state, $cookies) {

  let vm = this;

  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;
  vm.internalId = null; 
  vm.user_id = $cookies.get('user_id');
  // vm.img = $cookies.get('img');

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    vm.user_id = $cookies.get('user_id');
    // vm.img = $cookies.get('img');
    console.log(vm.loggedIn)
    startUpdates()
  });

 // console.log('userID:', vm.user_id);
 // console.log('img:', vm.img);

  function logout () {
  	UserService.logout();
  	vm.loggedIn = false;
  	clearInterval(vm.intervalId)
  	vm.intervalId = null;
  }

  function startUpdates () {
  	updateLoc();
  	vm.intervalId = setInterval(updateLoc, 50000)

  }
 

 function updateLoc () {
	if (navigator.geolocation) {
		console.log('there is geolation');
	  navigator.geolocation.getCurrentPosition(position => {
	  	let location = {};
	  	location.lat = position.coords.latitude;
	  	location.long = position.coords.longitude;
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

LayoutController.$inject = ['UserService', '$rootScope', '$state', '$cookies'];



export { LayoutController };