'use strict'

app.controller('UsuarioController', UsuarioController)

function UsuarioController($http){

	var vm = this

   const token = localStorage.getItem('JwtToken')

   vm.Usuario = {}    
 	vm.Usuarios = []


   vm.ListarTodos = function () {

   	$http({
   		method: 'GET',
   		url: '/api/v1/usuario/retrieve',
         headers: { Authorization: token }

   	}).then(function(ret){
   		vm.Usuarios = ret.data
   	})

   }

   vm.Gravar = function(){
   	$http({
   		method: 'POST',
   		url: '/api/v1/usuario/create',
         headers: { Authorization: token },
   		data: vm.Usuario
   	}).then(function(ret){
   		vm.ListarTodos()
   		vm.Usuario = {}
   	})


   }

   vm.Deletar = function(id){
   	if(confirm('Atenção\nVocê realmente deseja remover esse registro?')){
	   	$http({
	   		method: 'GET',
	   		url: '/api/v1/usuario/delete/' + id,
             headers: { Authorization: token }

	   	}).then(function(ret){
	   		vm.ListarTodos()
	   		alert('Usuário removido com sucesso')
	   	})

   	}
   }



}