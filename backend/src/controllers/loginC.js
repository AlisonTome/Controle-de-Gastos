const conexão = require('../database/conexão');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const empresa = await conexão('empresa')
            .where('id', id)
            .select('nome')
            .first();

            if (!empresa) {
                return response.status(400).json({error: 'Não existe nenhuma empresa com este ID.'});
            }

            return response.json(empresa);
    }
}