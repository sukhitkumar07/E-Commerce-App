import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Component/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import UserLogin from "./Component/UserLogin";
import MerchantLogin from "./Component/MerchantLogin";
import MerchantSignUp from "./Component/MerchantSignUp";
import MerchantHomePage from "./Component/MerchantHomePage";
import MerchantUpdate from "./Component/MerchantUpdate";
import UserHomePage from "./Component/UserHomePage";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/merchant" element={<MerchantLogin/>}/>
          <Route path="/merchantsignup" element={<MerchantSignUp/>}/>
          <Route path="/merchanthomepage/:id" element={<MerchantHomePage/>}/>
          <Route path="/merchanthomepage/update/:id" element={<MerchantUpdate/>}/>
          <Route path="/userhomepage" element={<UserHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
