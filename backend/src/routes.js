const express = require('express')

const empresaC = require('./controllers/empresaC');
const casosC = require('./controllers/casosC');
 
const routes = express.Router();

routes.get('/company', empresaC.index);
routes.post('/company', empresaC.create);

routes.get('/casos', casosC.index);
routes.post('/casos', casosC.create);
routes.delete('/casos/:id', casosC.delete);

module.exports = routes;
