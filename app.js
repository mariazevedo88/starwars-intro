/**
 * App execution
 * Author: Mariana Azevedo
 * Since: 05/03/2020
 */
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('App - Intro Star Wars');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Running on port', port));