//Aqui esta nossa Business Logic

var BMIService = {

	getIndex: function(weight, height) {
        weight = parseFloat(weight);
        height = parseFloat(height);
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
            
			return (weight / (height * height)).toFixed(2);
		}
		return null;
	},
	
	getDescription: function (result) {
	     	 if(result < 17)
                        return 'Muito Abaixo do Peso Ideal!';            
            else if(result > 17 && result < 18.49)
                        return 'Abaixo do Peso Ideal!';
            else if(result > 18.50 && result < 24.99)
                        return 'Peso na Faixa Ideal!';
            else if(result > 25 && result < 29.99)
                        return 'Acima do Peso Ideal!';
            else if(result > 30 && result < 34.99)
                        return 'Obesidade I!';
            else if(result > 35 && result < 39.99)
                        return 'Obesidade II(Severa)!';
            else if(result > 40)
                      return 'Obesidade III(Morbida)!';
            else        
		return "";
	}
	
};

module.exports = BMIService;