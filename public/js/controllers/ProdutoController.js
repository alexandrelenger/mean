'use strict'

app.controller('ProdutoController', ProdutoController)

// ## ADICIONADO O PARAMETRO $stateParams PARA ACESSAR OS PARAMETROS PASSADOS PELA ROTA ## //
// ## ADICIONADO O PARAMETRO $State para controlar rotas
function ProdutoController($http, $stateParams, $state){

	var vm = this

    vm.Produto = {}    
 	vm.Produtos = []


   // Adicionado a funcao para listar apenas um produto
   vm.ListarUm = function(id) {
      $http({
         method: 'GET',
         url: '/api/v1/produto/retrive/' + id
      }).then(function(ret){
         vm.Produto = ret.data
      })
   }

   // Lógica para saber se vai ALTERAR ou INCLUIR um produto
   if ( $stateParams.id ) {
      vm.ListarUm($stateParams.id)
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
      // ADICIONADO UMA LOGICA NO BOTAO GRAVAR, CASO ESTEJA NA ROTA
      // QUE CONTENHA O ID, VAI GRAVAR O QUE JA EXISTE (UPDATE)
      // SE NAO VAI INSERIR O NOVO

      if ( $stateParams.id ) { // ALTERACAO
         $http({
            method: 'POST',
            url: '/api/v1/produto/update',
            data: vm.Produto
         }).then(function(ret){
            vm.ListarTodos()
            vm.Produto = {}
            $state.go('cnsProduto')
         })
      } else { // INCLUSAO
         $http({
            method: 'POST',
            url: '/api/v1/produto/create',
            data: vm.Produto
         }).then(function(ret){
            vm.ListarTodos()
            vm.Produto = {}
         })
      }

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