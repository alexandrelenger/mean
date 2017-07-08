'use strict'

app.controller('LoginController', LoginController)

function LoginController($http, $state){

	var vm = this
    
    vm.Usuario = {}

    vm.Login = function(){

      $http({
      	method: 'POST',
      	url: '/api/v1/usuario/login',
      	data: vm.Usuario

      }).then(function(retorno){

      	if( retorno.data.error === false){
      		$state.go('home')
      	}else{
      		sweetAlert("Atenção!", retorno.data.message, "error");
      	}      	

      })
    }
}

