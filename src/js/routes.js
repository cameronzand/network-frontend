function routerConfig ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tpl.html',
			controller: 'LayoutController as layout'
		})

		.state('root.home',{
			url: '/',
			templateUrl: 'templates/home.tpl.html',
			controller: 'HomeController as home'
		})
		.state('root.login',{
			url: '/login',
			templateUrl: 'templates/login.tpl.html',
			controller: 'LoginController as login'
		})
		.state('root.register',{
			url: '/register',
			templateUrl: 'templates/register.tpl.html',
			controller: 'RegisterController as register'
		})
		.state('root.single',{
			url: '/users/:id',
			templateUrl: 'templates/single.tpl.html',
			controller: 'SingleController as single'
		})
		.state('root.nearby',{
			url: '/nearby',
			templateUrl: 'templates/nearby.tpl.html',
			controller: 'NearbyController as nearby'
		})
		.state('root.message',{
			url: '/message/:id',
			templateUrl: 'templates/message.tpl.html',
			controller: 'MessageController as message'
			// $scope.message = new MessageController()
		})
		.state('root.thread',{
			url: '/thread',
			templateUrl: 'templates/thread.tpl.html',
			controller: 'ThreadController as thread'
		});
	$urlRouterProvider.otherwise('/');

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };