import {Request , Response} from 'express';
class IndexController{
    public index(req:Request,res:Response){
    res.render('index',{title:'welcome',layout: false});
    }
}

const indexController= new IndexController();
export default indexController;