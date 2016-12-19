var app = angular.module('myApp',['ionic']);
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when("" , '/home')
		$stateProvider
			.state('home',{
				url : '/home',
				templateUrl : 'template/home.html',
				controller : 'homeCtrl'
			})
			.state('detail',{
				url : '/detail',
				templateUrl : 'template/detail.html',
				controller : 'detailCtrl'
			})
	})