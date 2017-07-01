'use strict'

const express = require('express')
const router = express.Router()
const UsuarioModel = require('../models/UsuarioModel')

// C - Create
// R - Retrive
// U - Update
// D - Delete


//create  (CRUD)
router.post('/create', (req,res) =>{

  const body = req.body

  UsuarioModel.create(body, (err, data) => {
    if (err) return res.status(500).json(err)
      return res.status(201).json(data)

  })

})


//Retrive
router.get('/retrive', (req,res) => {

  const query = { }

  UsuarioModel.find(query, function(err, data)  {
    if (err) return res.status(500).json(err)
      return res.status(200).json(data)

  })
})

router.get('/retrive/:_id', (req,res) => {
  
  const _id = req.params._id
  const query = { _id: _id }

  UsuarioModel.findOne(query, function(err, data)  {
    if (err) return res.status(500).json(err)
      return res.status(200).json(data)

  })
})


//Update
router.post('/update', (req,res) =>{
  
  const body = req.body

  const query = { _id: body._id }

  delete body._id 
  

  UsuarioModel.update(query, body, (err, data) => {
    if (err) return res.status(500).json(err)
      return res.status(200).json(data)

  })

})

//delete
router.get('/delete/:_id', (req,res) => {
  
  const _id = req.params._id
  const query = { _id: _id }

  UsuarioModel.remove(query, function(err, data)  {
    if (err) return res.status(500).json(err)
      return res.status(200).json(data)

  })
})


module.exports = router
