const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { title, description, value} = request.body; 
        const ong_id = request.headers.authorization;

        const [id] =  await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json( { id });
    },

    async index(request, response){
        // essa atribuição significa uma atribuição para comecar
        // no valor 1
        const { page = 1} = request.query;

        // similar a SELECT COUNT(*) FROM INCIDENTS
        const  [count] = await connection('incidents').count();

        // a paginacao é feita no backend para que
        // a listagem seja exibida a cada 5 valores;
        // o JOIN é realizado pelo comando .join
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

}