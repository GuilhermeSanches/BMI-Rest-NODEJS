var BMIService = require('../services/BMIService');


exports.read = function(req, res) {    
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM calcs ',function(err,result){
			if(err) return res.status(400).json();
			return res.status(200).json(result);
		});
	});
}


exports.create = function(req, res) {
 	var peso = req.body.weight;
    var altura = req.body.height;
    var bmi = BMIService.getIndex(peso, altura);    
    var descricao = BMIService.getDescription(bmi);
    
	req.getConnection(function(err,connection){
		connection.query('INSERT INTO calcs SET weight = ?, height = ?, bmi = ?',[peso, altura, bmi],function(err,result){
			if(err) return res.status(400).json(err);
			return res.status(200).json({
                bmi: bmi,
                descricao: descricao
            }); 
		});
	});
 }

