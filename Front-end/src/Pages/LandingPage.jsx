import Header from "../Component/Header";
import BestOffers from "../Component/BestOffers" ; 
import AboutUs from "../Component/AboutUs" ; 
import '../App.css';
const LandingPage = () => {
    return ( 
       
       <div className="landingpage">
              
               <Header></Header> 
               <BestOffers></BestOffers>
               <AboutUs></AboutUs>
               

       </div>
                
     
     );
}
 
export default LandingPage;