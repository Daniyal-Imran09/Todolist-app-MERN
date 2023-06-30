const mongoose = require('mongoose')
const dbconnect = async ()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect("mongodb://127.0.0.1:27017/contactappTodo_list_app")
        console.log("databse connected")
    } catch (error) {
        console.log('error while connecting to database')
    }
}
module.exports = dbconnect;