import { Link } from "react-router-dom";
import "../Style/LandingPage.css"
const LandingPage = () => {
  return (
    <div className="landingpage">
      
      <div className="user">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwNBugC_5dIVMJzel98mzSXbbxScMnadIfqmhFjiP9g&s" alt="" /><br />
      <Link to="/merchant">Merchant</Link>
      </div>
      <div className="merchant">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" /><br />
      <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default LandingPage;
