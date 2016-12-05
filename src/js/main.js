import angular from 'angular';



import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController';
import { HomeController } from './controllers/HomeController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';
import { SingleController } from './controllers/SingleController';
import { ChatController } from './controllers/ChatController';

import { UserService } from './services/users';



import 'angular-ui-router';
import 'angular-cookies';

angular 
	.module('app', ['ui.router', 'ngCookies',])
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.controller('LoginController', LoginController)
	.controller('RegisterController', RegisterController)
	.controller('SingleController', SingleController)
	.controller('ChatController', ChatController)
	.config(routerConfig)
	.service ('UserService', UserService);
