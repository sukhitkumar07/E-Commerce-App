// import axios from "axios";
// import { useState } from "react";
// import {useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductView from "./ProductView";
import MerchantNavBar from "./MerchantNavBar";
import MerchantUpdate from "./MerchantUpdate";
const MerchantHomePage = () => {
   // let [id,setid]=useState("");
   // let[name,setname]=useState("");
   // let[email,setemail]=useState("");
   // let [gst_number,setgst_number]=useState("");
   // let [phone,setphone]=useState("");
   // let [password,setpassword]=useState("");
   // let [status,setstatus]=useState("");
   // let data={id,name,email,gst_number,phone,password,status};
   // let navigate=useNavigate();
   //     let param=useParams();
   //     console.log(param.id);
   //     axios.post(`http://localhost:8080/merchants/${param.id}`)
   //     .then((res)=>{
   //        let result=res.data.body;
   //        setemail(result.email);
   //        setid(result.id);
   //        setname(result.name);
   //        setgst_number(result.gst_number);
   //        setpassword(result.password);
   //        setphone(result.phone);
   //        setstatus(result.status);
   //     })
   //     .catch((rej)=>{
   //         console.log("invalid");

   //     })
   //  function update(){
   //    navigate(`/merchanthomepage/update/${data.id}`)
   //  }
   return (
      <div className="merchanthomepage">
         <MerchantNavBar />
         <Routes>
            <Route path="/productview" element={<ProductView />} />
            <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
         </Routes>
      </div>
   );
}

export default MerchantHomePage;