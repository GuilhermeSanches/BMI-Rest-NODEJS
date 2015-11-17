var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
       
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			weight = parseFloat(form.weight.value),
			height = parseFloat(form.height.value),
			result = 0;
		
		var callback = function(result) {
              
			BMIController.showResult(result);			
		};
		  
		BMIController.showLoading(true);
		BMIService.getIndex(weight, height, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
        var spanDescription = document.getElementById("results");        
        spanDescription.innerHTML = result.descricao;
		spanResult.innerHTML = parseFloat(result.bmi).toFixed(2);
		BMIController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'BMI Result'
	}

};

//initialization
BMIController.init();