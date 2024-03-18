import axios from "axios";
import { useEffect, useState } from "react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Style/ProductView.css"
import { Link } from "react-router-dom";
const ProductView = () => {
    let [data, setdata] = useState([]);
    let merchant = JSON.parse(localStorage.getItem("Merchant"))

    useEffect(() => {

        axios.post(`http://localhost:8080/products/find-by-merchant_id/${merchant.id}`)
            .then((res) => {
                console.log(res.data)
                setdata(res.data.body)
            })
            .catch((rej) => {
                console.log(rej);
            })
    }, [merchant.id])

    let edit = (id) => {
        <Link to="/merchanthomepage/updateproduct"></Link>
    }

    return (
        <div className="productview">

            {
                data.map((x) => {
                    return (
                        <div className="productitem">
                            <div className="image">
                                <img src={x.image_url} alt="" />

                            </div>
                            <div className="content">
                                <h4>{x.description}</h4>
                                <p>{x.name}</p>
                                <p>{x.brand}</p>
                                <p>{x.category}</p>
                                <p> <button href="/merchanthomepage/product" className="btn btn-success">View <FullscreenIcon /></button>
                                    <button onClick={edit} className="btn btn-warning">Edit <EditIcon /></button>
                                    <button className="btn btn-danger">Delete <DeleteIcon /></button></p>
                            </div>
                            <div className="cost">
                                <h2>{x.cost}</h2>

                            </div>

                        </div>
                    )
                }
                )}
        </div>
    );
}

export default ProductView;