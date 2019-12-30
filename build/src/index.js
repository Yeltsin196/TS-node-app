"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var books_1 = __importDefault(require("./routes/books"));
var app = express_1.default();
var bodyParser = require('body-parser');
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    layoutsDir: path_1.default.join(__dirname, 'views/layouts'),
    partialsDir: path_1.default.join(__dirname, 'views/partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');
//routes 
app.use('/books', books_1.default);
app.use('/', index_1.default);
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.listen(app.get('port'), function () {
    return console.log("Server on port " + app.get('port'));
});
