function SingleController (UserService, $stateParams, $state, NgMap) {

  let vm = this;

  vm.users = [];
  vm.nearby = [];
  vm.remove = remove;
  vm.num = [];


  NgMap.getMap(googlemap).then(function(map){
    console.log(map)
    vm.map = map;
  });

  function init () {
    UserService.getUser($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log('singleuser:')
      console.log(resp)
    });
  };

  init();


  function nearby (nearbyuser) {
    UserService.getNearby(nearbyuser).then(function (show){
      vm.nearby = show.data;  
      NgMap.getMap(googlemap).then(function(map){
        vm.map = map;
        vm.nearby.forEach(function(user){
        loadMarker(user.location)

        })
      });
      console.log('nearby:')
      console.log(vm.nearby)

    });
  };


function loadMarker(person){
  vm.nearby.forEach(function(img){
    vm.image = img.user.img
    console.log('img:', vm.image);
  })
//console.log('img:', vm.nearby[0].user.img)
  let position = new google.maps.LatLng(person.lat, person.long)

  var image = {
        url: vm.image, // image is 512 x 512
        scaledSize : new google.maps.Size(22, 32)
  };
  var marker = new google.maps.Marker({
      map: vm.map,
      position: position,
      icon: image,
      scrollwheel: false,
      draggable: false

  });
  vm.map.setZoom(7);
  vm.map.panTo(marker.position);

  console.log('marker:', marker)
}

  nearby();

  	function remove (user) {
        UserService.deleteUser(user).then(function (resp) {
      		console.log(resp);
      	vm.users = vm.users.filter(function (x) {
       		 return x.id !== user.id;

        });

     	});
     	$state.go('root.register');
  	};

}

SingleController.$inject = ['UserService', '$stateParams', '$state', 'NgMap'];
export { SingleController };