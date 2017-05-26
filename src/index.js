require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')

var App = require('./App')

$(function(){
  var app = new App();
  app.start();
})
