const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, `Must provide a name`],
        trim:true,
        maxLength:[20,"the name can exceed 20 characters"]
    },
    completed:{
        type:Boolean,
        default: false,
    }
},{ collection: 'contacts'}
)


module.exports = mongoose.model('Person', personSchema)