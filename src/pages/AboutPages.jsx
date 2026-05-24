import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";


export default function AboutPage() {

    return (
        <>



            <Layout>

                <main>
                    <div className="p-5 mb-4 rounded-3 text-center">
                        <div className="container-fluid py-5">
                            <h1 className="display-3 fw-bold">Chi siamo</h1>
                            <p className="col-md-12 fs-4">
                                La storia dell'e-commerce piú fornito d'Italia
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row g-4 bg-white p-4 rounded-3">

                            <div className="col-12 col-md-6">
                                <h2 className="fw-bold">La nostra storia</h2>
                                <p className="fs-5">
                                    E-COMMERCE nasce nel 2015 dalla passione di tre amici
                                    che sognavano di rendere lo shopping online semplice,
                                    veloce e accessibile a tutti. Da un piccolo magazzino
                                    in periferia siamo cresciuti fino a diventare uno dei
                                    negozi digitali piú apprezzati d'Italia, con oltre
                                    500.000 clienti soddisfatti.
                                </p>
                            </div>

                            <div className="col-12 col-md-6">
                                <h2 className="fw-bold">La nostra missione</h2>
                                <p className="fs-5">
                                    Crediamo che ogni acquisto debba essere un'esperienza
                                    piacevole. Per questo selezioniamo con cura ogni
                                    prodotto, garantiamo spedizioni rapide in 24/48 ore e
                                    offriamo un servizio clienti sempre disponibile,
                                    pronto ad aiutarti in ogni momento.
                                </p>
                            </div>

                            <div className="col-12 text-center mt-4">
                                <NavLink className="btn button btn-lg" to="/prodotti">
                                    Scopri i nostri prodotti
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </main>
            </Layout>

        </>
    )

}
