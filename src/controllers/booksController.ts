import {Request , Response} from 'express';
class BooksController{

    public renderBook(req:Request,res:Response){
    res.render('books/add',{title:'welcome'});
    }

    public indexBook(req:Request,res:Response){
        res.render('books/index',{title:'libros'});
        }

        public saveBook(req:Request,res:Response){
           console.log(req.body);
           res.send('recibido');
        }    
}

const booksController= new BooksController();
export default booksController;