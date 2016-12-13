import angular from 'angular';
import 'ngMap';
import 'angular-ui-router';
import 'angular-cookies';


import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController';
import { HomeController } from './controllers/HomeController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';
import { SingleController } from './controllers/SingleController';
import { NearbyController } from './controllers/NearbyController';
import { MessageController } from './controllers/MessageController';
import { ThreadController } from './controllers/ThreadController';

import { UserService } from './services/users';




angular 
	.module('app', ['ui.router', 'ngCookies', 'ngMap'])
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.controller('LoginController', LoginController)
	.controller('RegisterController', RegisterController)
	.controller('SingleController', SingleController)
	.controller('NearbyController', NearbyController)
	.controller('MessageController', MessageController)
	.controller('ThreadController', ThreadController)
	.config(routerConfig)
	.service ('UserService', UserService);
