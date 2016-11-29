import angular from 'angular';


import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController';
import { HomeController } from './controllers/HomeController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';

import { UserService } from './services/users';



import 'angular-ui-router';

angular 
	.module('app', ['ui.router'])
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.controller('LoginController', LoginController)
	.controller('RegisterController', RegisterController)
	.config(routerConfig)
	.service ('UserService', UserService)