const express = require('express');


//INICIALIZAR APP EN EXPRESS
const app = express();
app.use(express.json());

module.exports = { app }
