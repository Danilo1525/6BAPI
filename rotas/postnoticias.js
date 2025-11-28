module.exports = (app) => {
    app.post('/postnoticias', async (req, res) => {
        try {
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = req.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .insertOne({
                    titulonoticia: titulonoticia,
                    conteudonoticia: conteudonoticia,
                    tiponoticia: tiponoticia,
                    datahoracadastro: new Date().toLocaleString('pt-BR', { timeZone: 'America/Cuiaba' })
                })
            res.status(200).send("Notícia Cadastrada")
        } catch (error) {
            res.status(400).send("Não foi possível cadastrar a notícia")
        }
    })
}