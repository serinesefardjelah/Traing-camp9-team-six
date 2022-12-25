
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import SingleCar from './Component/SingleCar';
import Navbar from './Component/Navbar';
import ResearchPage from './Pages/ResearchPage'
import Testing from './Pages/Testing';
import AnnonceCompo from './Component/AnnonceComp';
import { useState } from 'react';
import Cookies from 'cookies';
function App() {
{
  /*
const [user, setUser] = useState(
Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
  );
const Welcomepage = ()=>
(user ? <LandingPage/> : <SignInPage/>)
 
  */
}
 
  return (

    <div className="App">
       <Router>
       <Navbar></Navbar>
       <div className="content">         
          <Routes>
           <Route index element={<LandingPage/>} />
           
           <Route path="/SignInPage" element={<SignInPage/>}/>
           <Route path="/SignUpPage" element={<SignUpPage/>}/>
           <Route path="/Research" element={<ResearchPage/>}/>
           <Route path="/Testing" element={<Testing/>}/>
           <Route path="/Research/:id" element={<SingleCar/>}/>
          </Routes>
      </div>
      </Router>

    </div>
  );

}

export default App; 
