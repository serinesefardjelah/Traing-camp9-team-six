import CarsSlider from "../Component/CarsSlider";
import FiltreBar from "../Component/FiltreBar";
const ResearchPage = () => {
    return ( 
        <div className="flex flex-col justify-center items-center">
            <FiltreBar></FiltreBar>
             <CarsSlider url={'http://localhost:8001/cars'}></CarsSlider>
             {/* simulating an API that filters cars according to certain filters */}
        </div>
     );
}

 
export default ResearchPage;