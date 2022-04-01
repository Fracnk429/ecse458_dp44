import {Outlet,useNavigate} from 'react-router-dom'
import React from 'react'


export default function App() {
  const navigate =useNavigate()
  const goLogin =()=>{
    navigate('/login')
  }
 
  return (
    <div>
       <h2 style={{ textAlign: 'center'}}> SmartLab System</h2>
       <div>
         <button onClick={goLogin}>
          Login in System Click Here
            </button> 
            </div>  
       <hr/>
        <Outlet/>  
              
    </div>
  )
}


