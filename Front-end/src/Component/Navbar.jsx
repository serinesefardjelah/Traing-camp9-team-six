import { Link } from 'react-router-dom';
import Logov1 from '../assets/Logo.png';
import HomeIcon from "../assets/icons/HomeIcon.svg";
import Dolar from "../assets/icons/dolar.svg";
import About from "../assets/icons/about.svg";
import Search from "../assets/icons/search.svg";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar  bg-white cursor-pointer font-medium top-0 flex flex-row align-center jutify-center px-[5px] py-[20px] w-full">
                { /*<h1> logo here </h1>*/}
                <div className='flex flex-col bg-white justify-center items-center'>
                    <a className='relative pb-[10px]' href="/#Header">

                        <img src={Logov1} className="w-[150px] " alt="" />
                    </a>
                </div>


                <div className='Btns flex px-32 ml-[50px] gap-20'>
                    <a className='relative' href="/#Header">
                        Accueil
                    </a>

                    <a className='relative' href="/#BestOffers">
                        <div className='flex flex-row '>
                            <img className="w-[25px] mr-[5px]" src={Dolar} alt="" />
                            <p>Offres</p>
                        </div>
                    </a>

                    <a className='relative' href="/#AboutUs">
                        <div className='flex flex-row '>
                            <img className="w-[27px] mr-[5px]" src={About} alt="" />
                            <p>De Nous </p>
                        </div>
                    </a>

                    <Link to="/Research" className='relative'>
                        <div className='flex flex-row '>
                            <img className="w-[25px] mr-[5px]" src={Search} alt="" />
                            <p>Recherche </p>
                        </div>
                    </Link>


                </div>


                <div className='px-[50px] ml-[5px] flex gap-x-10 '>
                    <Link to="/SignInPage" className='hover:text-asfar'> Sign In </Link>
                    <Link to="/SignUpPage" className='hover:text-asfar'> Sign Up </Link>
                </div>

            </div>

        </nav>


    );
}

export default Navbar;
