function NearbyController (UserService, $stateParams, $cookies) {

	let vm = this;

	vm.nearby = [];
  vm.user_id = $cookies.get('user_id')
  


	function nearby (nearbyuser) {
    	UserService.getNearby(nearbyuser).then(function (show){
      	vm.nearby = show.data;
      	console.log('nearby:')
      	console.log(vm.nearby)
        });
    };

    nearby();

  // function getId () {
    
  
  // };

  // getId();

 // console.log('user_id', vm.user_id)


};

NearbyController.$inject = ['UserService', '$stateParams', '$cookies'];
export { NearbyController };