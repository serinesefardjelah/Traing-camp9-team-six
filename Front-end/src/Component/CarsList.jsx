import AnnonceComp from "./AnnonceComp";
import { Link } from "react-router-dom";
const CarsList = ({ cars }) => {

    return (
        <div className="bg-ahmar w-full flex flex-wrap justify-evenely m-[10px] p-[10px]">
            
            {cars.map((car) =>
            (<div className=" flex flex-row w-1/5 mx-auto mb-[30px]" key={car.id}>
                <Link to={`/Research/${car.id}`}>
                    <AnnonceComp car={car}></AnnonceComp>
                </Link>

            </div>
            ))}
        </div>
    );
}

export default CarsList;