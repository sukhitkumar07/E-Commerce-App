import axios from "axios";
import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const MerchantHomePage = () => {
let [id,setid]=useState("");
let[name,setname]=useState("");
let[email,setemail]=useState("");
let [gst_number,setgst_number]=useState("");
let [phone,setphone]=useState("");
let [password,setpassword]=useState("");
let [status,setstatus]=useState("");
let data={id,name,email,gst_number,phone,password,status};
let navigate=useNavigate();
    let param=useParams();
    console.log(param.id);
    axios.post(`http://localhost:8080/merchants/${param.id}`)
    .then((res)=>{
       let result=res.data.body;
       setemail(result.email);
       setid(result.id);
       setname(result.name);
       setgst_number(result.gst_number);
       setpassword(result.password);
       setphone(result.phone);
       setstatus(result.status);
    })
    .catch((rej)=>{
        console.log("invalid");
       
    })
    function update(){
      navigate(`/merchanthomepage/update/${data.id}`)
    }
    return ( 
        <div className="merchanthomepage">
           <h2>{data.id}</h2>
           <h2>{data.name}</h2>
           <h2>{data.email}</h2>
           <h2>{data.phone}</h2>
           <h2>{data.gst_number}</h2>
           <h2>{data.status}</h2>
           <h2>{data.password}</h2>
           <button onClick={update}>Update</button>
        </div>
     );
}
 
export default MerchantHomePage;