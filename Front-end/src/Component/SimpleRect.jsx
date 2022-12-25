const SimpleAnnonce = (props) => {
const imagesrc = props.imagesrc ; 
const desc = props.desc ; 
    return (  
        <div className=" flex flex-col justify-center items-center  rounded-lg w-1/4">         
        <div className=" ml-[20px] shadow-gray-900 shadow-xl dh border-1 w-[200px] h-[200px] p-[10px] rounded-lg ">
        <img className="rounded-lg" src={imagesrc} alt="" />
        <h3 > {desc}  </h3>
        </div>
        
  </div>
    );
}
 
export default SimpleAnnonce;