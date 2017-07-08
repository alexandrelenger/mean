'use strict'

app.controller('ProdutoController', ProdutoController)

function ProdutoController($http){

	var vm = this

    vm.Produto = {}    
 	vm.Produtos = []

	vm.ListarUm = function(id) {
	  $http({
	   method: 'GET',
	   url: '/api/v1/produto/retrive/' + id
	  }).then(function(ret){
	   vm.Produto = ret.data
	  })
	 }

   vm.ListarTodos = function () {

   	$http({
   		method: 'GET',
   		url: '/api/v1/produto/retrive'

   	}).then(function(ret){
   		vm.Produtos = ret.data
   	})

   }

   vm.Gravar = function(){
   	$http({
   		method: 'POST',
   		url: '/api/v1/produto/create',
   		data: vm.Produto
   	}).then(function(ret){
   		vm.ListarTodos()
   		vm.Produto = {}
   	})


   }

   vm.Deletar = function(id){
   	if(confirm('Atenção\nDeseja remover esse registro?')){
	   	$http({
	   		method: 'GET',
	   		url: '/api/v1/produto/delete/' + id

	   	}).then(function(ret){
	   		vm.ListarTodos()
	   		alert('Produto removido com sucesso')
	   	})

   	}
   }

   vm.Atualizar = function(id){   	
	   	$http({
	   		method: 'GET',
	   		url: '/api/v1/produto/update/' + id

	   	}).then(function(ret){
	   		vm.ListarTodos()
	   		alert('Produto atualizado com sucesso')
	   	})

   }

	
}