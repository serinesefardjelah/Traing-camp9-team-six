import { useState } from "react";
import FilteIcon from "../assets/icons/FiltreIcon.png"
const FiltreBar = () => {
   const[research,setResearch]= useState() ;
   const handleClick = ()=>
   {
    // here we handle the backend research 
   }

   const [model , setModel] = useState('') ; 
   const [year, setYear] = useState('') ; 
   const [pricemin , setPricemin] = useState('') ; 
   const [pricemax , setPricemax] = useState('') ; 
   const [wilaya , setWilaya] = useState('') ; 
   const [nbseats , setNbseat] = useState('') ; 

    return ( 
        <div className=" flex flex-col p-[50px]">
        
         <div className=" flex flex-row items-center justify-between pt-[10px]">
         
                 <input 
               type="text"
               required 
               value={research}
               className="bg-lightgreen w-[800px] h-[45px] mr-[20px] rounded-[20px] "
               onChange ={(e)=> setResearch(e.target.value)}  
               />
              <button className="bg-asfar px-[5px]  border-0 rounded-[11px] ml-[20px] hover:text-white " onClick={()=>handleClick}>
              <div className="flex flex-rox items-center justify-between">
                   <img src={FilteIcon} alt="" />
                   <p> filtre</p>
              </div>
             
              </button>

         </div> 

         <div className="flex flex-row items-start justify-between pt-[50px]">
            <div className="flex flex-col">
            <label>Modèle</label>
            <input 
               type="text"
               required 
               value={model}
               className="bg-lightgreen w-[130px] h-[20px] mr-[2px] rounded-[20px] "
               onChange ={(e)=> setModel(e.target.value)}  
               />
            </div>
        
             <div className="flex flex-col">
        <label> Année </label>
                 <select
                     value={year}
                     className="bg-lightgreen"
                     size={3}
                     onChange ={(e)=> setYear(e.target.value)} >
                     <option value="2022">2022</option>
                     <option value="2021">2021</option>
                     <option value="2020">2020</option>
                     <option value="2019">2019</option>
                     <option value="2018">2018</option>
                     <option value="2017">2017</option>
                     <option value="2016">2016</option>
                     <option value="2015">2015</option>
                     <option value="2014">2014</option>
                 </select>
             </div>

            <div className="flex flex-col">
                        <label> Prix Min </label>
                        <input 
                        type="text"
                        required 
                        value={pricemin}
                        className="bg-lightgreen w-[130px] h-[20px] mr-[2px] rounded-[20px] "
                        onChange ={(e)=> setPricemin(e.target.value)}  
                        />
            </div>  
      
              <div className="flex flex-col"> 
               <label> Prix Max </label>
               <input 
               type="text"
               required 
               value={pricemax}
               className="bg-lightgreen w-[130px] h-[20px] mr-[2px] rounded-[20px] "
               onChange ={(e)=> setPricemax(e.target.value)}  
               />
               </div>

             <div className="flex flex-col">
             <label> Wilaya </label>
                 <select
                     value={wilaya}
                     className="bg-lightgreen"
                     autofocus
                     size={3}
                     onChange ={(e)=> setWilaya(e.target.value)} >
                     <option value="Adrar">Adrar</option>
                     <option value="Chlef">chlef </option>
                     <option value="Laghouat">laghouat </option>
                     <option value="Oum El Bouaghi">oum elbouaghi </option>
                     <option value="Batna">batna </option>
                     <option value="Batna">bejaia  </option>
                     <option value="Batna">beskra</option>
                     <option value="Batna">bouira </option>
                 </select>
             </div>
               
             <div className="flex flex-col">
                <label> Places </label>
                                    <input 
                                        type="number"
                                        required 
                                        value={pricemax}
                                        className="bg-lightgreen w-[70px] h-[20px] mr-[2px] rounded-[20px] "
                                        onChange ={(e)=> setNbseat(e.target.value)}  
                                        />
             </div>

               


         </div>
      
           
            
        </div>
        
     );
}
 
export default FiltreBar;