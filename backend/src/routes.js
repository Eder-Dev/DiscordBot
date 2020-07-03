const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const ImageControllers = require('./controllers/ImageControllers');

const routes = express.Router();

//Listar ONG
routes.get("/criar", ImageControllers.create);
//Criar ONG
routes.get("/listar", ImageControllers.index);


module.exports = routes;
