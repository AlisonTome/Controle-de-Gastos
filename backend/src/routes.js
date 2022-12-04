const express = require('express')

const empresaC = require('./controllers/empresaC');
const casosC = require('./controllers/casosC');
const profileC = require('./controllers/profileC');
const loginC = require('./controllers/loginC');

const routes = express.Router();

routes.post('/login', loginC.create)

routes.get('/company', empresaC.index);
routes.post('/company', empresaC.create);

routes.get('/profile', profileC.index)

routes.get('/casos', casosC.index);
routes.post('/casos', casosC.create);
routes.delete('/casos/:id', casosC.delete);

module.exports = routes;
