var BMIService = {

	getIndex: function(weight, height, callback) {
       
		$.ajax({
		  url: 'http://localhost:3000/api/bmi', 
          type:'post',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {              
		  	callback(result);              
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},		
};