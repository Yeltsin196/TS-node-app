"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BooksController = /** @class */ (function () {
    function BooksController() {
    }
    BooksController.prototype.renderBook = function (req, res) {
        res.render('books/add', { title: 'welcome' });
    };
    BooksController.prototype.indexBook = function (req, res) {
        res.render('books/index', { title: 'libros' });
    };
    BooksController.prototype.saveBook = function (req, res) {
        console.log(req.body);
        res.send('recibido');
    };
    return BooksController;
}());
var booksController = new BooksController();
exports.default = booksController;
