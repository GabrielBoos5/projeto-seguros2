const PropostaApiController = require('../infra/propostaDao')


module.exports = (app) => {
    app.route('/proposta')
        .post(PropostaApiController.adiciona)


    app.route('/proposta/:id')
    .delete(PropostaApiController.excluiPorId)
    .get(PropostaApiController.listaPorId)
    .put(PropostaApiController.edita)
    
    app.route('/proposta/busca/:cpf')
    .get(PropostaApiController.buscaPorCpf)
}
