import { useState } from "react";
//import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
    const[firstname , setFName] = useState('') ; 
    const[lastname , setLName] = useState('') ; 
    const[email , setEmail] = useState('') ; 
    const[password, setPassword] = useState('') ; 
    const[wilaya, setWilaya] = useState('') ; 

    const[isPending , setIsPending]= useState(false)  ; 
  // const  historyrouter = useHistory ();
 
 const handleSubmit =(e) =>
 {
    e.preventDefault() ; 
    const user = { firstname , lastname  , email , password  , wilaya} ; 
     setIsPending(true) ; 

    fetch('http://localhost:8000/users' , 
    {
         method: 'POST' , 
         headers: {"Content-Type" : "application/json"} , 
         body: JSON.stringify(user)
    } 
     ) 
     .then((data)=>
     { 
         console.log('new user added') ;
         setIsPending(false) ; 
         const token = data.token
         localStorage.setItem("token",token)
         //redirect to page li rani haba nbethelha 
      // historyrouter.push ('./');

     }
     ) 
 
 }
    return ( 
         <div className="createform p-[30px] bg-azra9 ">
            <h1 className=" text-akhdhar m-[10px] text-[30px] font-bold"> Create an account </h1>
      
             <form onSubmit={handleSubmit}>
 
                <div className="flex flex-row gap-2">
                       <div>
                            <label> First Name : </label>
                                <input 
                                type="text"
                                required 
                                value={firstname}
                                className="bg-lightgreen"
                                onChange ={(e)=> setFName(e.target.value)}  
                                />
                       </div>

                       <div> 
                        <label> Last  Name : </label>
                                <input 
                                type="text"
                                required 
                                value={lastname}
                                className="bg-lightgreen"
                                onChange ={(e)=> setLName(e.target.value)}  
                                />
                        </div>
                </div>
                
 
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
                  type="password"
                  required 
                  value={password}
                  className="bg-lightgreen"
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />
                 <label> Wilaya : </label>
                 <select
                     value={wilaya}
                     className="bg-lightgreen"
                     onChange ={(e)=> setWilaya(e.target.value)} >
                     <option value="Adrar">Adrar</option>
                     <option value="Chlef">chlef </option>
                     <option value="Laghouat">laghouat </option>
                     <option value="Oum El Bouaghi">oum elbouaghi </option>
                     <option value="Batna">batna </option>
                     <option value="Batna">bejaia  </option>
                 </select>
 
                    { !isPending ?  <button className="cursor-pointer bg-akhdhar text-white p-[8px]  border-0 rounded-[8px]"> sign up  </button>:<button disabled> loading  ... </button>}
                   
             </form>
                 
                 
         </div>
      );
 }

export default SignUpPage;
