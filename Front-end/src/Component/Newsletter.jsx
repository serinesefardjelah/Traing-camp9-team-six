import { useState } from "react";

const Newsletter = () => {
    const [ email , setEmail] = useState() ; 
    return ( 
        <div className="flex justify-center items-center py-[60px]  mx-auto">
            <div className=" flex flex-col justify-center items-center border-2 border-asfar rounded-xl p-12 ">
                <h1 className="text-akhdhar text-center m-[10px] text-[30px] font-bold "> Get your monthly newsletter</h1>
                 <p className="font-bold"> Subscribe to our  newsletter and receive a monthly mail containing the latest statistics from the Algerian market of cars.</p>
                    <div>
                    <input 
                  type="text"
                  required 
                  value={email}
                  className="border-asfar mt-[20px] text-center border-2 rounded-xl  w-1/2  h-[40px] "
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />
                  <button className="bg-asfar p-2 rounded-xl "> submit </button>
                    </div>
                
            </div>
        </div>
     );
}
 
export default Newsletter;