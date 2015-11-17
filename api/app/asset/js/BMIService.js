var BMIService = {

	getIndex: function(weight, height, callback) {
       
		$.ajax({
		  url: '/api/bmi', 
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