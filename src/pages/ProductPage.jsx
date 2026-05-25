import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function ProductPage() {


    const [productsData, setProductsData] = useState([])

    function fetchData() {
        const url = 'https://fakestoreapi.com/products'
        fetch(url)

            .then(res => res.json())
            .then(data => {
                setProductsData(data);
            })
    }

    useEffect(fetchData, [])

    return (
        <>

            <Layout>
                <section className="product-main py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bold">I nostri prodotti</h1>
                            <p className="fs-5 text-secondary mb-0">
                                Scopri una selezione di articoli pensati per ogni esigenza.
                            </p>
                        </div>

                        <div className="row g-4">
                            {
                                productsData.map(product => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                                        <Link className="product-link" to={`/prodotti/${product.id}`}>
                                            <div className="card product-card h-100">
                                                <img className="card-img-top product-image" src={product.image} alt={product.title} />
                                                <div className="card-body d-flex flex-column">
                                                    <span className="text-uppercase small text-secondary fw-bold mb-2">
                                                        {product.category}
                                                    </span>
                                                    <h2 className="card-title h5 fw-bold">{product.title}</h2>
                                                    <p className="card-text text-secondary product-description">
                                                        {product.description}
                                                    </p>

                                                    <p className="card-text fs-5 fw-bold mt-auto mb-0">
                                                        {product.price} EUR
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}
