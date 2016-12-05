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
.state('root.chat',{
			url: '/users/',
			templateUrl: 'templates/chat.tpl.html',
			controller: 'ChatController as Chat'
		});
	$urlRouterProvider.otherwise('/');

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };