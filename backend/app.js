const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dbConnection = require('./config/db')
const adminRouter = require('./routes/admin.routes')

const app = express();
app.use(cors());
app.use(morgan('dev'))


app.set("view engine" , 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/admin',adminRouter)


app.get('/', (req,res)=>{
    res.render('admin')
    console.log("admin panel started")
})



app.listen(8000,()=>{
    console.log('server running on 8000')
})