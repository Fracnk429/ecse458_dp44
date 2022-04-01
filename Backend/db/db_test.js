// This file is for practicing mongoose 
const md5= require('blueimp-md5')
// test using mongoose to use mongodb


// 1 connecting database

//1.1 import mongoose
const mongoose=require('mongoose')

//1.2 connecting database

mongoose.connect("mongodb+srv://dp44:458dp44@cluster0.25oog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

//1.3 get connection object

const conn = mongoose.connection

//1.4 listener and bind (tesitng using shell: node db/db_test.js )

conn.on('connected', ()=>{
        console.log('database connected succesfully');
})

// get model
const userSchema =mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:String,required:true},
    header: {type: String} // test if not required

})

// define model
const UserModel = mongoose.model('user',userSchema)

// save  
function testSave(){
    const userModel = new UserModel({username:'Tom', password:md5('123'),type:'admin'})
    userModel.save((error,user)=>{
        console.log('save()',error,user)
    })
}

// find

// find users // get collection of users
function testFind(){
    UserModel.find((error,users)=>{
        console.log('find',error,users)
    })
}

//update
function testUpdate(){
    UserModel.findByIdAndUpdate({_id:'5ae'},
    {username:'Jace'}, (err,doc)=>{
        console.log(err,doc)

    }
)
}

//delete

function testDelete(){
    UserModel.remove({_id:'231421124asf'},
    (error,doc)=>{
        console.log(err,log)
    })
}

