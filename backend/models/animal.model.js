const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    petName:String,

})

const petModel = mongoose.model('petName', petSchema);

module.exports = petModel