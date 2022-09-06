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

app.get('/square/:num',validate, (req,res) => {
    res.status(200).send(req.params.num)
})




app.use(errorHandler);

function start(PORT) {
    app.listen(PORT,() => console.log ('server is wakeup'));
}

module.exports = {
    app: app,
    start: start
}