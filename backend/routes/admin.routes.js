const express =  require('express')
const router = express.Router();
const petModel = require('../models/animal.model')


router.post('/upload-pet-data',async (req,res)=>{
    const {petName}=req.body
    const newProduct = await petModel.create({
     
       petName:petName
    })
   res.send('pet uploded')
})

router.get('/get-pet-data',async(req,res)=>{
    const pets = await petModel.find();
    res.json(Animals);
    console.log('data retrived from backend to json')
    
})
module.exports = router;