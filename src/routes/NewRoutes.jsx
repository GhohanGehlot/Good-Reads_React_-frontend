import SignIn from "Auth/signin";
import SignUp from "Auth/signup";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
             <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
             <Route path='/signin' element={<SignIn />}></Route>
             <Route path='*' element={<NotFound/>}></Route>
        </Routes>           
    )
}