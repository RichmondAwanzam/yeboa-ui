var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var express= require('express');
var stormpath = require('express-stormpath');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));




app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap/css/bootstrap.min.css'));
});

app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap/js/bootstrap.min.js'));
});

app.get('/style.css', function (req, res) {
  console.log("return styleshett");
  res.sendFile(path.join(__dirname, 'stylesheets/style.css'));
});

app.get('/forms.css', function (req, res) {
  console.log("return styleshett");
  res.sendFile(path.join(__dirname, 'stylesheets/forms.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/images', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/images'));
});

  app.listen(3000,'localhost',function(err){
    if(err){
      return console.error(err);
    }
     console.log('Listening at http://localhost:3000');
  })

