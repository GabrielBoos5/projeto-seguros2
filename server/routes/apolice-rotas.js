const ApoliceApiController = require('../infra/apoliceDao')
const middlewaresAutenticacao = require('../config/middleware-autenticacao')


module.exports = (app) => {
    app.route('/apolice')
        .post(ApoliceApiController.adiciona)
        .get(ApoliceApiController.lista)

    app.route('/apolice/:id')
    .delete(middlewaresAutenticacao.local,ApoliceApiController.excluiPorId)
    .get(ApoliceApiController.listaPorId)   
}
