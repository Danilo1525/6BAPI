
module.exports = (app) => {
  app.get('/noticias/tiponoticias/:tipo', async (req, res) => {
    const tipo= req.body.tipo
    await app.DBClient.connect();
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find({tiponoticia:tipo}).toArray();
    console.log(noticias);

    res.json(noticias)
  })
}