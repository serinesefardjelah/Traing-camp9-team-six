import '../App.css';
import Newsletter from './Newsletter';
import Footer from './Footer';
import WhyUs from './WhyUs';
const AboutUs = () => {
    return (
        <div className=" w-full h-screen pt-[90px]" id="AboutUs">
               <WhyUs></WhyUs>
               <div className=' flex flex-column justify-center items-center'></div>
                <Newsletter></Newsletter>
                <Footer></Footer>
                
        </div>
      );
}
 
export default AboutUs;