const express = require('express');
const UsuariosControllers = require('./controllers/UsuarioControllers');
const UsuarioController = new UsuariosControllers()

const routes = express.Router();
routes.get('/',(req, res)=>{
    return res.status(200).json("Salve");
})
routes.route('/usuarios')
  .post((req, res) => {
    return UsuarioController.createController(req, res)
  })
  .get((req,res)=>{
    return UsuarioController.getAllController(req, res)
  })
routes.route('/usuarioslista')
.get((req,res)=>{
  return UsuarioController.getOneController(req, res)
})
routes.route('/usuariodelet')
module.exports = routes;