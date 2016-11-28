import angular from 'angular';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController'
import { HomeController } from './controllers/HomeController'

import 'angular-ui-router';

angular 
	.module('app', ['ui.router'])
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.config(routerConfig)