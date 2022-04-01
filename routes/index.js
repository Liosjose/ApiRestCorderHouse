import { Router } from 'express';
import {getAll, getAllId, deleteById,productos} from '../controllers/index.js'
const router = Router();



router.get('/productos', (req,res)=> { 
     let productos = getAll()  
     res.send({productos})
     })


 router.get('/productos/:id', (req,res)=> { 
          let id = req.params.id
          let productos = getAllId(id)  
          res.send(productos)

                  })
     

// no entiendo por que razon envia un null 
router.post('/productos/', (req, res)=>{ 
     let producto = req.body
     productos.push(producto)
     res.send(productos)
})
     

router.delete('/productos/:id', (req, res)=>{
     let id = req.params.id
     let productos = deleteById(id)  
          res.send(productos)

})



router.put('/productos/', (req, res)=>{
     

     productos.push(req.body) 
    res.send(productos)

})



export default router;