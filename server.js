const express = require('express');

const port = process.env.PORT || 8080;
var app = express();

var db = require('./models');

app.use(express.static('public'));
var exphbs  = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

var routes = require('./controllers/burgers')

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(routes)

db.sequelize.sync({force:true}).then(function () {
  app.listen(port, function () {
    console.log('App listening on port' + port);
  });
});