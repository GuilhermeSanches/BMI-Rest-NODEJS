/* ----------------- Author: Guilherme Sanches Pereira  ---------- */
require('getmodule');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var connection = require('express-myconnection');
var mysql = require('mysql');
var index = require('./routes/index');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : '',        
        database:'bmi'
    },'request')
);

app.use('/', index);

app.listen(process.env.port || 3000); 

