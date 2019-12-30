import {Router , Request } from 'express';
import booksController from '../controllers/booksController';
const router:Router= Router();

router.get('/',booksController.indexBook);
router.get('/add',booksController.renderBook);
router.post('/add',booksController.saveBook);
export default router;