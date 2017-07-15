'use strict'

const express = require('express')
const router = require('./SecureRoutes')(false)
const jwt = require('jsonwebtoken')

const UsuarioModel = require('../models/UsuarioModel')

router.post('/', (req,res) => {

/*
  let SUPER_SENHA = '1234'
  let dados = {
    nome: 'alexandre',
    idade: 18
  }
  let options = {
    algorithm: 'HS256',
    expiresIn: 60*60*8
  }

  jwt.sign(dados, SUPER_SENHA, options, function(err, token){
    if (err) return res.status(500).json(err)
      return res.status(200).json( { token: token } )
  })


  */
  
  const body = req.body

  const query = { usuario: body.usuario, senha: body.senha }

  UsuarioModel.findOne(query, (err, data) => {    

    if (err) {
      return res.status(500).json({error: true, message: err})
    }

    if (data) {

     let superSecret = '1234'
     let JwtData = {  }

     let options = {
       algorithm: 'HS256', //Tipo de criptografia
       expiresIn: 60*60*8 // Expira em 8 hora (Conta em segundos)
     }

     jwt.sign(JwtData, superSecret, options, function(err, token){

     	if (err){
     		res.status(500).json({erro: true, jwtObjectError: err})
     	} else {

     		return res.status(200).json({error: false, message: 'Usuário Logado com Sucesso', token: token})
     	}
     })


      


    }else{
      return res.status(200).json({error: true, message: 'Usuário ou Senha Inválida'})
    }     
  })  



 })

module.exports = router
