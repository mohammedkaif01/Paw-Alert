const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/pet-data').then(()=>{
    console.log("connected to databse")
})

module.exports = connection