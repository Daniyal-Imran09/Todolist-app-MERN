const mongoose = require("mongoose")

const todoitmeschema = ({
    item:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('todo',todoitmeschema)