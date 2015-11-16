/* ----------------- Author: Guilherme Sanches Pereira  ---------- */

var express = require('express');//biblioteca em js para nosso serviço rest, semelhante ao SLIM do PHP
var app = express();
var bodyParser = require('body-parser');
var BMIService = require('./services/BMIService');//nosso serviço de BMI
var cors = require('cors');

app.use(cors()); //usado para evitar erro de Politica de Mesma origem ao acessar o servidor em uma url distinta do cliente
app.use(bodyParser.json());// usado para poder usar o metodo POST
app.use(bodyParser.urlencoded({ extended: true }));//no postmen ao usar post ao invez de usar form-data use form-urlencoded


app.get('/', function(req, res){
    res.send("running in localhost:3000");
});

app.post('/api/bmi', function(req, res){        //rota para nosso BMI
    var altura = req.body.height;    //aqui pegamos o parametro altura do CORPO da mensagem da url
    var peso = req.body.weight;     //aqui pegamos o parametro peso do CORPO da mensagem da url
           
    var resp = BMIService.getIndex(peso, altura); //variavel para nossa resposta vinda do retorno do serviço
    var descricao = BMIService.getDescription(resp); //variavel para a descricao vinda do serviço
    
    res.json({              // aqui esta nosso JSON de retorno do post no formato CHAVE->VALOR
        bmi: resp,
        descricao: descricao
    });
    
});

app.get('/api/bmi/height/:height/weight/:weight', function(req, res){        //rota para nosso BMI
    var altura = req.params.height;    
    var peso = req.params.weight;     
           
    var resp = BMIService.getIndex(peso, altura); //variavel para nossa resposta vinda do retorno do serviço
    var descricao = BMIService.getDescription(resp); //variavel para a descricao vinda do serviço
    
    res.json({              // aqui esta nosso JSON de retorno do post no formato CHAVE->VALOR
        bmi: resp,
        descricao: descricao
    });
    
});

app.listen(process.env.port || 3000); // NOSSA PORTA DO SERVIDOR EM LOCALHOST