import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/ViewProduct.css"
const ViewProduct = () => {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then((res) => {
                setdata(res.data.body)
                console.log(res);
            })
            .catch((rej) => {
                console.log(rej);
            })
    }, [])

    return (
        <div className="viewproduct">
            {
                data.map((x) => {
                    return (
                        <div className="product">
                            <div className="image">
                                <img src={x.image_url} alt="" />
                            </div>
                            <div className="content">
                                <h4>{x.description}</h4>
                                <p>{x.name}</p>
                                <p>{x.brand}</p>
                                <p>{x.category}</p>
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

export default ViewProduct;