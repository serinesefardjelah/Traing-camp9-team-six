import carpic from '../assets/car1.png'
import LocationIcon from '../assets/icons/location.svg'
const AnnonceCompo = (props) => {
   const car = props.car
    return ( 
        <div className=" rounded-lg w-1/4">
              
              <div className=" border-asfar ml-[20px] shadow-gray-900 shadow-xl dh border-2 w-[200px] h-[250px] p-[10px] rounded-lg ">
              <img className="rounded-lg" src={carpic} alt="" />
              <h3 > {car.name} </h3>
              <h2> {car.type} </h2> 
              <h2> {car.prix}</h2>
              <div className='flex flex-row items-end gap-[10px]'>
              <img src={LocationIcon} alt="" />
              <h2> {car.location}</h2>

              </div>
           
        </div>
        
        </div>
     );
}
 
export default AnnonceCompo;