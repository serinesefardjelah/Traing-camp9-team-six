import SimpleAnnonce from "./SimpleRect";
import Title from "./Title";
import first from "../assets/first.png" ; 
import second from "../assets/second.png" ; 
import third from "../assets/third.png" ; 
import forth from "../assets/forth.png" ; 

const WhyUs = () => {
    const PrqNousPics =
        [
            {
                description: "+1256 offers ",
                picture: first,
            },
            {
                description: "+2500 users",
                picture: second,
            },
            {
                description: "58 wilayas",
                picture: third,
            },
            {
                description: "+568 models",
                picture: forth,
            }
        ]
    return (

        <div className="p-[10px]">
            <Title title={"Qui Sommes Nous ? "}></Title>
            <div className="flex flex-row mt-[50px]">
                {PrqNousPics.map((pic) =>
                (<div className=" flex flex-row justify-center items-center  mx-auto" >
                    <SimpleAnnonce imagesrc={pic.picture} desc={pic.description}></SimpleAnnonce>
                </div>
                ))}
            </div>
        </div>
    );
}

export default WhyUs;