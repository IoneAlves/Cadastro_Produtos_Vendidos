const Express = require('express');
const app = Express();
const databaseTable = require('./database/tables')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.render('../views/index')
})

app.post('/', async (req, resp)=>{
    await databaseTable.tabelaVendas.create({
        data: req.body.data,
        produto: req.body.produto,
        preco: req.body.preco,
        desconto: req.body.desconto,
        vendedor: req.body.vendedor
    }).then(()=>{
        req.body = "";
        resp.redirect('/');
    }).catch((err)=>{
        resp.send(`Erro de Cadastro: ${err}`);
    });
});


app.listen(8081, ()=>{
    console.log(`Servidor Rodadando`)
});

