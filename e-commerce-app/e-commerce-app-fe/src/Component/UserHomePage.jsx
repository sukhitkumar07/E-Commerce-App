import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserHomePage = () => {
    let [id, setid] = useState("");
    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [age, setage] = useState("");
    let [gender, setgender] = useState("");
    let [phone, setphone] = useState("");
    let [password, setpassword] = useState("");
    let [status, setstatus] = useState("");
    let data = { id, name, email, age, gender, phone, password, status };
    let navigate = useNavigate();
    let param = useParams();
    console.log(param.id);

    axios.post(`http://localhost:8080/users/${param.id}`)
        .then((res) => {
            let result = res.data.body;
            setemail(result.email);
            setid(result.id);
            setname(result.name);
            setage(result.age);
            setgender(result.gender)
            setpassword(result.password);
            setphone(result.phone);
            setstatus(result.status);
            
        })
        .catch((rej) => {
            console.log("invalid");
            console.log(data);
        })

    function update() {
        navigate(`/userhomepage/update/${data.id}`)
    }
    return (
        <div className="userhomepage">
            <h1 >User Home Page</h1>
            <h2>{data.id}</h2>
            <h2>{data.name}</h2>
            <h2>{data.email}</h2>
            <h2>{data.phone}</h2>
            <h2>{data.age}</h2>
            <h2>{data.gender}</h2>
            <h2>{data.status}</h2>
            <h2>{data.password}</h2>
            <button onClick={update}>Update</button>
        </div>
    );
}

export default UserHomePage;