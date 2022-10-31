const crypto = require('crypto');
const conexão = require('../database/conexão');

module.exports = {
  async index (request, response) {
    const empresa = await conexão('empresa').select('*');
  
    return response.json(empresa);
  },
    async create(request, response){
        const { nome, email, whats, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await conexão('empresa').insert({
          id,
          nome,
          email,
          whats,
          cidade,
          uf,  
        })
    
        return response.json({ id });
    }
}; 