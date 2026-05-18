import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";


export default function HomePage() {

    return (
        <>

            <NavBar></NavBar>


            <main>
                <div className="p-5 mb-4 rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-3 fw-bold">Benvenuto</h1>
                        <p className="col-md-12 fs-4 ">
                            Nell'e-commerce piú fornito d'Italia
                        </p>
                        <button className="btn button btn-lg " type="button">
                            Scopri chi siamo
                        </button>
                        <br />
                        <br />
                        <button className="btn button btn-lg" type="button">
                            Scopri i nostri prodotti
                        </button>
                    </div>
                </div>

            </main>
        </>
    )

}