import { BrowserRouter,Link,Route,Switch ,Redirect} from "react-router-dom"
import {useState} from "react"
import React from 'react'
import { Home } from "./Pages/Home/Home"
import { Contact } from "./Pages/Contact/Contact"
import { About } from "./Pages/About/About"
import PrivateRoute from "./PrivateRoute/PrivateRoute"

 function Router(){
    const [IsAuth, setIsAuth] = useState()
    return (
        <div>
            <BrowserRouter>
            <button onClick={()=>setIsAuth(true)}>LOGIN</button>
            <button onClick={()=>setIsAuth(false)}>LOGOUT</button> 
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <PrivateRoute path="/about" component={About} isAuth={IsAuth} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;