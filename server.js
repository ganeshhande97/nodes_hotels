const express = require('express')
const app = express();
const db = require('./DB.JS');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (_req, res) {
  res.send('Welcome to my hotel... how i can help you ?,we have list of menu')  
});

const menuRoutes = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);



app.listen(3000,()=>{
    console.log('Listening on port 3000');
});