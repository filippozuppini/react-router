import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProductPage() {


    const [productsData, setProductsData] = useState([])

    function fetchData() {
        const url = 'https://fakestoreapi.com/products'
        fetch(url)

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductsData(data);
            })
    }

    useEffect(fetchData, [])

    return (
        <>

            <h1>product page</h1>


            <div className="container">
                <div className="row g-3">

                    {
                        productsData.map(product => (
                            <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                                <div className="card">
                                    <img className="card-img-top" src={product.image} alt="foto-profilo" />
                                    <div className="card-body">
                                        <h4 className="card-title">{product.title}</h4>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.price}</p>
                                        <p className="card-text">{product.category}</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>



        </>
    )
}