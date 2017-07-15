'use strict'

const jwt = require('jsonwebtoken')

const secureRoute = function(secure = true){
    //Instancia o objeto Router
	const router = require('express').Router()
    
    //Caso for proteger a rita
	if( secure === true){
      router.use( (req, res, next) => {
      	const authorization = req.headers.authorization
	    const superSecret = '1234'
 		jwt.verify(token, superSecret, (err, data) =>{
 			if(data){
 				next()
 			} else {
 				res.status(500).json({
 					erro: true,
 					jwtObjectError: err
 				})
 			}
 		})
      })

    }

    return router

}

module.exports = secureRoute