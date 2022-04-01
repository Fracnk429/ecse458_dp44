
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dp44:458dp44@cluster0.25oog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const conn = mongoose.connection

conn.on('connected',()=>{
    console.log('Smart Lab Database connected successfully')
})


const userSchema= mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:String,required:true},
    email: {type:String,required:true},
})


const UserModel = mongoose.model('user',userSchema)


exports.UserModel = UserModel

