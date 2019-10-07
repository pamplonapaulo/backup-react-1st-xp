const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); // dispensa o '.js' mas precisa do caminho relativo './'

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-week-6sybr.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST , PUT, DELETE
// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

//app.use(cors({ origin: 'http://localhost:3333' }));
//app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors()); // todos podem acessar a api
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);