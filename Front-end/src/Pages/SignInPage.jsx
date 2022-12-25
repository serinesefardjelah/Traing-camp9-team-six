import Cookies from "cookies";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => { 
    const[email , setEmail] = useState('') ; 
    const[password, setPassword] = useState('') ; 

    const[isPending , setIsPending]= useState(false)  ; 

    const[remember , setRemember] = useState('') ; 
 
 const handleSubmit =(e) =>
 {
    e.preventDefault() ; 
    const user = {email , password } ; 
     setIsPending(true) ; 
     // if the function fires and fetch starts , we will wait ...
    fetch('http://localhost:8000/users' , 
    {
         method: 'POST' , 
         headers: {"Content-Type" : "application/json"} , 
         body: JSON.stringify(user)
    } 
     ) 
     .then((data)=>
     { 
        Cookies.set("user", JSON.stringify(data), { expires: 30 });
         console.log('new user added') ;
         setIsPending(false) ; 
         //
         const token = data.token
         localStorage.setItem("token",token)
         //redirect to page li rani haba nbethelha 
     }
     ) 
 
 }
    return ( 
         <div className="createform p-[30px] ">
              <h1 className=" text-akhdhar m-[10px] text-[30px] font-bold "> Sign In  </h1>
      
             <form onSubmit={handleSubmit}>
 
                 <label > Email : </label>
                 <input 
                  type="text"
                  required 
                  value={email}
                  className="bg-lightgreen"
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />

                 <label > Password : </label>
                 <input 
                  type="text"
                  required 
                  value={password}
                  className="bg-lightgreen"
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />
                    
                  <div className="flex flex-row justify-between items-center  ">
                    <input 
                  type="checkbox"
                  required 
                  value={remember}
                  className="bg-lightgreen w-[20px] h-[20px]"
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />  
                  <p className="text-[15px]">Remember me </p> 

                  <Link to="/SignUpPage" className="underline text-asfar text-[15px]"> Forgot password ?  </Link>        
                 </div>
                 
           
                {!isPending ? <button className="cursor-pointer bg-akhdhar text-white p-[8px]  border-0 rounded-[8px]"> Sign In </button>:<button disabled> logging in   ... </button>}
              </form>      
                 
         </div>
      );
 }

export default SignInPage;
