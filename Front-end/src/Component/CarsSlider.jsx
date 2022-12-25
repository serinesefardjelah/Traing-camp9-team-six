import useFetch from "./useFetch";
import CarsList from "./CarsList";

const CarsSlider = ({url}) => {
    const { cars, isPending, error } = useFetch(url);
    /* get data and call it blgs in this context */
    return (
        <div className=" ">

           
            {error ? <div> there's an error : {error} </div> : <></>}
            {isPending ? <div> Loading ... </div> : <></>}
            {cars ? <CarsList cars={cars} ></CarsList> : <></>}



        </div>
    )

}

export default CarsSlider;