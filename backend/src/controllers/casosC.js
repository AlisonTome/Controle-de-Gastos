const conexão = require('../database/conexão');

module.exports = {
    async index(request, response) {

        const { page = 1 } = request.query;

        const [total_casos] = await conexão('casos')
            .count();

        const casos = await conexão('casos')
            .join('empresa', 'empresa.id', '=', 'casos.id_empresa')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['casos.*',
                'empresa.nome',
                'empresa.email',
                'empresa.whats',
                'empresa.cidade',
                'empresa.uf'
            ]);

        response.header('total_casos', total_casos['count(*)']);   

        return response.json (casos);
    },
    
    async create(request, response){
        const { titulo, descrição, valor } = request.body;
        const id_empresa = request.headers.autorizacao;

        const [id] = await conexão('casos').insert({
            titulo,
            descrição,
            valor,
            id_empresa,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const id_empresa = request.headers.autorizacao;

        const casos = await conexão('casos')
            .where('id', id)
            .select('id_empresa')
            .first();

        if (casos.id_empresa !== id_empresa) {
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await conexão('casos').where('id', id).delete();

        return response.status(204).send();
    }
};