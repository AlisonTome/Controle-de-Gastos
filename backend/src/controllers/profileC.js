const conexão = require('../database/conexão');

module.exports = {
    async index(request, response) {
        const id_empresa = request.headers.autorizacao;

        const casos = await conexão('casos')
            .where('id_empresa', id_empresa)
            .select('*');

        return response.json(casos);
    }
}