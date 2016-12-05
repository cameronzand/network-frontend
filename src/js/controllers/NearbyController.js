function NearbyController (UserService) {

	let vm = this;

	vm.nearby = [];

	function nearby (nearbyuser) {
    	UserService.getNearby(nearbyuser).then(function (show){
      	vm.nearby = show.data;
      	console.log('nearby:')
      	console.log(vm.nearby)
        });
    };

    nearby();


};

NearbyController.$inject = ['UserService'];
export { NearbyController };