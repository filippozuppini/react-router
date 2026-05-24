import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function HomePage() {

    return (
        <>

            <NavBar></NavBar>

            <main className="home-main">
                <section className="container py-5">
                    <div className="row align-items-center min-vh-10">
                        <div className="col-12 col-lg-7 text-center text-lg-start">
                            <span className="text-uppercase fw-bold text-secondary">
                                Shopping online semplice e veloce
                            </span>
                            <h1 className="display-3 fw-bold mt-3 mb-4">
                                Trova tutto quello che cerchi in un solo posto
                            </h1>
                            <p className="fs-4 text-secondary mb-4">
                                E-COMMERCE seleziona prodotti affidabili, convenienti
                                e pronti per arrivare a casa tua in 24/48 ore.
                            </p>

                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <NavLink className="btn button btn-lg" to="/prodotti">
                                    Scopri i prodotti
                                </NavLink>
                                <NavLink className="btn btn-dark btn-lg" to="/chi-siamo">
                                    Chi siamo
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 mt-5 mt-lg-0">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="home-feature bg-white p-4">
                                        <h3 className="h5 fw-bold">Spedizioni rapide</h3>
                                        <p className="mb-0 text-secondary">
                                            Ricevi i tuoi ordini in 24/48 ore con tracking
                                            sempre aggiornato.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="home-feature bg-white p-4">
                                        <h3 className="h5 fw-bold">Prodotti selezionati</h3>
                                        <p className="mb-0 text-secondary">
                                            Scegli tra articoli controllati e recensiti da
                                            clienti reali.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="home-feature bg-white p-4">
                                        <h3 className="h5 fw-bold">Assistenza dedicata</h3>
                                        <p className="mb-0 text-secondary">
                                            Il nostro team ti accompagna prima, durante e
                                            dopo l'acquisto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )

}
