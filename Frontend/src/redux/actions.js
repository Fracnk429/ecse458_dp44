import { reqLogin,reqRegister } from "../Api"

import {AUTH_SUCCESS,ERROR_MSG} from './action-types'



const authSucess=(user)=>({type:AUTH_SUCCESS,data:user})

const errorMsg= (msg)=>({type:ERROR_MSG, data:msg})




export const register = (user)=>{
    // const {username,email,password,password2,type} = user
    // if(!username){
    //     return errorMsg('User name cannot be empty')
    // }else if(password!==password2){
    //     return errorMsg('No, please make sure two input passwords are the same!!')
    // }else if(!email){
    //     return errorMsg('Email cannot be empty')
    // }
    
    
    return async dispatch =>{


        // sending register ajax request {username,password,type,email}
       const response= await reqRegister(user)
       const result =response.data 

       if(response.code===0){
           dispatch(authSucess(result.data))

       }else{
           dispatch(errorMsg(result.msg))
       }


    }
}


export const login = (user)=>{
    const {username,password} = user
    if(!username){
        return errorMsg('User name cannot be empty')
    }else if(!password){
        return errorMsg('Password cannot be empty')
    }
    return async dispatch =>{
        // sending register ajax request
       const response= await reqLogin(user)
       const result =response.data

       if(response.code===0){
        dispatch(authSucess(result.data))
       }else{
        dispatch(errorMsg(result.msg))
       }


    }
}