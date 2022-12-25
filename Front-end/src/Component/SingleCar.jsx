import { useParams } from "react-router-dom";

const SingleCar = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="pt-[90px]">
            <h1 className="text-[50px]">car that has the id : {id} </h1>
           
        </div>
    );
}

export default SingleCar;