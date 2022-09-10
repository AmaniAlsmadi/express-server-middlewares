'use strict';

const express = require ('express');
const app = express();
const cors = require('cors');
const validate = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.status(200).send('Hello World')
})

/*app.get('/square/:num',validate, (req,res) => {
    res.status(200).send(`{ num : ${req.params.num * req.params.num} }`)
})*/


app.get('/square',validate, (req,res) => {
    res.status(200).send(`{ num : ${+req.query.num * +req.query.num} }`);
})



app.use(errorHandler);

function start(PORT) {
    app.listen(PORT,() => console.log ('server is started on port', PORT));
}

module.exports = {
    app: app,
    start: start
}