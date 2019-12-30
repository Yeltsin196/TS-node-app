import {Request , Response} from 'express';
import BookModel, { Book } from '../models/book';
class BooksController{

    public renderBook(req:Request,res:Response){
    res.render('books/add',{title:'welcome'});
    }

    public async indexBook(req:Request,res:Response):Promise<void>{
       const books : Book[]= await BookModel.find();
        res.render('books/index',{
            title:'libros',
            books});
        }

        public async saveBook(req:Request,res:Response){
            const {title,author,isbn} =req.body;
           const book:Book = new BookModel({title,author,isbn});
           await book.save();
           res.redirect('/books');
        }    
}

const booksController= new BooksController();
export default booksController;