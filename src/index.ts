import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import IndexRoutes from './routes';
const app = express();


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

//routes 
app.use('/books', IndexRoutes);
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=> 
console.log(`Server on port ${app.get('port')}`));