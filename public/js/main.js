'use strict'

var app = angular.module('AppChamados',['ui.router'] )

app.config(myConfig)

function myConfig($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
  	url: '/home',
  	views: {
  		'': {
  			templateUrl: './views/home.html',
  			controller: 'HomeController',
            controllerAs: 'vm'
  		},
  		'menu' :{
  			templateUrl: './views/menu.html'
  		}
  	}

  })
  

  $urlRouterProvider.otherwise('/home')

}