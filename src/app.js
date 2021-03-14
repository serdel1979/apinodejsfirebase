const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

//settings

app.set('port', process.env.PORT || 3050);
app.path('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    extname:'.hbs'
}));
app.set('view engine','.hbs');
//midlewares
app.set(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//rutas
 
app.use(require('./routes/index'));



//static files
app.path(express.static(path.join(__dirname,'public')));


module.exports = app;