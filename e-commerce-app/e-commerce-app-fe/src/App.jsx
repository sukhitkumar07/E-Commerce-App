import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Component/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import UserLogin from "./Component/UserLogin";
import MerchantLogin from "./Component/MerchantLogin";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/merchant" element={<MerchantLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
