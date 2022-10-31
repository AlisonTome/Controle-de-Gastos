const knex = require('knex');
const configuration = require('../../knexfile');

const conexão = knex(configuration.development);

module.exports = conexão;