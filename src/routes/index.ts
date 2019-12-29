import {Router } from 'express';

const router:Router= Router();
router.get('/', (req,res)=>{
    res.send('hello world')
})
router.get('/add', (req,res)=>{
    res.send('form')
})
export default router;