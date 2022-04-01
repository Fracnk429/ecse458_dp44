var express = require('express');
var router = express.Router();

const md5=require('blueimp-md5')
const UserModel= require('../db/models.js').UserModel

const filter ={password:0, _v:0}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// register a router: for sign up function 
// testing purpose for practice

// path :/register WAY: POST
// router.post('/register',function(req,res){
//   const {username,password} =req.body
//   if(username==='admin'){
//     res.send({code:1,msg:'Username exists'})
//   }else{
//      res.send({code:0,data:{id:'abc123',username,password}})
//   }
// })


//  a router for register
router.post('/register',(req,res)=>{
  const{username,password,type,email}=req.body
  // if user exists or not
  UserModel.findOne({username},(error,user)=>{
    if(user){
      res.send({code:1,msg:'User Exists! Try again'})
    }else{
      new UserModel({username,type,email,password:md5(password)}).save((err,user)=>{
        
        // generate cookie let browser to save  (1 hour)
        res.cookie('userid',user._id,{maxAge:1000*60*60} )

        
        const data = {username,type,email,_id:user._id} // response should not have password, need to be encrypted.
        
        res.send({code:0,data})
      })
    }

  })
})


// a router for log in
router.post('/login',(req,res)=>{
  const{username,password}=req.body
  // check if user exits 
  UserModel.findOne({username,password:md5(password)},filter,(err,user)=>{
    if(user){
      res.cookie('userid',user._id,{maxAge:1000*60*60} )
      const data ={user} 
      res.send({code:0, data})
    }else{
      res.send({code:1,msg:'Username or Password not correct Try again!'})
    }
  })
})


module.exports = router;
