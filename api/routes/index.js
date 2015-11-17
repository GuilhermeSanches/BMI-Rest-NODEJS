var express = require('express');
var app = express.Router();
var BMI = require('../bmi/bmiDAO');

app.route('/api/bmi')
    .get(BMI.read)
    .post(BMI.create);
  
module.exports = app;