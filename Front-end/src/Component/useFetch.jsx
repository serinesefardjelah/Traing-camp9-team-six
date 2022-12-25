import { useEffect , useState } from "react";

const useFetch = (url) => 
{
     const [cars , setCars] = useState(null); 
     const [ isPending , setisPending] = useState(true) ; 
     const [ error , seterror] = useState(null) ; 
   
     const useeffectfunction = () =>
     {
      const abortCont = new AbortController() ; 
        fetch(url , {signal : abortCont.signal}) 
          .then(res =>
           { if(!res.ok)
            {
                throw Error('could not fetch the cars from that ressource') ; 
            }
             return res.json() ;
          }) 
         .then(cars=>{
            setCars(cars) ; 
            setisPending(false) ;
            seterror(null) ;  
         })

         .catch(err=>{
          if (err.message === 'AbortError')
          { console.log('fetch aborted ')

          }else
          { setisPending(false) ; 
            seterror(err.message)
          }
           
         })         
         return () => 
         {console.log('cleanup')  ;    
         abortCont.abort()}
         
    }
   

    useEffect(()=>useeffectfunction,[url]) 
    return { cars , isPending , error}

}
 
export default useFetch;