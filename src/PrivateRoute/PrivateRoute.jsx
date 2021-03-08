
import { Route,Redirect} from "react-router-dom"


const PrivateRoute = ({ isAuth:isAuth ,component:Component,...rest}) => {
    
     
    return<Route {...rest} render={(props)=>{
        if (!isAuth){
            return<Redirect to="/home"/> 
        }
        return <Component {...props}/>
        
    }}/>
}// return <Route {...rest} render={()=>isAuth?(children):(<Redirect to={"/contact"}/>) }/>
export default PrivateRoute;
