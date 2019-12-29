import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
const app = express();


app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname:'.hbs',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    helpers:require('./lib/helpers'),
}));
app.set('view engine','.hbs');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(app.get('port'), ()=> 
console.log(`Server on port ${app.get('port')}`));