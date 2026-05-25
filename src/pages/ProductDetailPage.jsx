import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function ProductDetailPage() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    function fetchProduct() {
        const url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }

    useEffect(fetchProduct, [id])

    return (
        <Layout>
            <section className="product-main py-5">
                <div className="container">
                    <Link className="text-secondary text-decoration-none" to="/prodotti">
                        Torna ai prodotti
                    </Link>

                    {
                        product && (
                            <div className="row align-items-center g-5 mt-3">
                                <div className="col-12 col-lg-5">
                                    <div className="product-detail-image-wrapper bg-white">
                                        <img className="product-detail-image" src={product.image} alt={product.title} />
                                    </div>
                                </div>

                                <div className="col-12 col-lg-7">
                                    <span className="text-uppercase small text-secondary fw-bold">
                                        {product.category}
                                    </span>
                                    <h1 className="display-6 fw-bold mt-2 mb-3">
                                        {product.title}
                                    </h1>
                                    <p className="fs-5 text-secondary">
                                        {product.description}
                                    </p>
                                    <p className="display-6 fw-bold mb-4">
                                        {product.price} EUR
                                    </p>
                                    <button className="btn btn-dark btn-lg" type="button">
                                        Aggiungi al carrello
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </Layout>
    )
}
