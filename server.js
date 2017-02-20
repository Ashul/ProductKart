var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var products = require('./routes/products');
var productdetails = require('./routes/productdetails');
//var tasks = require('./routes/tasks');

var port = 3001;
var app = express();

//View Engine

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, '/client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', index);
app.use('/api', products);
app.use('/api', productdetails);

//app.use('/api', tasks);



app.listen(port, function(){
    console.log('Server Started on Port '+port);
})

