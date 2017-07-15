'use strict'

app.controller('LoginController', LoginController)

function LoginController($http, $state){

	var vm = this
    
    vm.Usuario = {}

    vm.Login = function(){

      $http({
      	method: 'POST',
      	url: '/api/v1/login',
      	data: vm.Usuario

      }).then(function(retorno){

      	if( retorno.data.error === false){      		
          console.log(retorno)
          localStorage.setItem('JwtToken', retorno.data.token)
          $state.go('home')
          
      	}else{
      		sweetAlert("Atenção!", retorno.data.message, "error");
      	}      	

      })
    }
}

