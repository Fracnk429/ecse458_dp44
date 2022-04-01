import ajax from "./ajax"

// interface for register
export const reqRegister=(user)=>{
    ajax('/register',user,'POST')
}


// interface for login

export const reqLogin=({username,password})=>{
    ajax('/login',{username,password},'POST')
}


