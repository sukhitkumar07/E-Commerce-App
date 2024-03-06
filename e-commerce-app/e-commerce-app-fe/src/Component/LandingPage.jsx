import { Link } from "react-router-dom";
import "../Style/LandingPage.css"
const LandingPage = () => {
  return (
    <div className="landingpage">
      <h1>Hi Gusys this is crash Landing Page</h1>
      <div className="user">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
      <Link to="/merchant">Merchant</Link>
      </div>
      <div className="merchant">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwNBugC_5dIVMJzel98mzSXbbxScMnadIfqmhFjiP9g&s" alt="" />
      <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default LandingPage;
