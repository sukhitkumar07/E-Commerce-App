import { Route, Routes } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import ViewProduct from "./ViewProduct";
import UpdateUser from "./UpdateUser";
const UserHomePage = () => {
    
    return (
        <div className="userhomepage">
           <UserNavBar/>
           <Routes>
            <Route path="/viewproduct" element={<ViewProduct/>}/>
            <Route path="/updateuser" element={<UpdateUser/>}/>
           </Routes>
        </div>
    );
}

export default UserHomePage;