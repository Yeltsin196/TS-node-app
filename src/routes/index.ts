import {Router , Request } from 'express';
import indexController from '../controllers/indexController';
const router:Router= Router();
router.get('/', indexController.index);
router.get('/add', (req,res)=>{
    res.send('form')
})
export default router;