import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import IndexRoutes from './routes/index';
import booksRoutes from './routes/books';

const app = express();

import bodyParser from 'body-parser';

app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname:'.hbs',
    layoutsDir:path.join(__dirname,'views/layouts'),
    partialsDir:path.join(__dirname,'views/partials'),
    helpers:require('./lib/helpers'),
    defaultLayout:'main',
}));
app.set('view engine','.hbs');

//middlewares
//app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

//routes 
app.use('/books', booksRoutes);
app.use('/', IndexRoutes);

app.listen(app.get('port'), ()=> 
console.log(`Server on port ${app.get('port')}`));