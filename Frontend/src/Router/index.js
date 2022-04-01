import App from "../App"
import HomeForAdmin from '../Pages/HomeForAdmin'
import Loginpage from '../Pages/Loginpage'
import Registerpage from '../Pages/Registerpage'
import Resourcepage from '../Pages/Resourcepage'
import { BrowserRouter,Routes,Route } from "react-router-dom"

const BaseRouter = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            <Route path="/homeadmin" element={<HomeForAdmin/>}></Route>
            <Route path="/login" element={<Loginpage/>}></Route>
            <Route path="/register" element={<Registerpage/>}></Route>
            <Route path="/resource" element={<Resourcepage/>}></Route>
            </Route>
            
            
        </Routes>
        
        </BrowserRouter>

    )
}


export default BaseRouter;