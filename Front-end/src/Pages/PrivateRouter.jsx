import {Redirect} from 'react-router-dom'
const PrivateRouter = ({children}) => {
   const token = localStorage.getItem("token") ; 
   if (token)
   { 
    return children
   }
   else
   {
    return  <Redirect to="/Home" />
   }

}
 
export default PrivateRouter;