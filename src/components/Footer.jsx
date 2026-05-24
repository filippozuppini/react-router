import { NavLink } from "react-router-dom";

export default function Footer() {


    return (
        <footer className="site-footer bg-body-tertiary border-top">
            <div className="container py-4">
                <div className="row gy-4">
                    <div className="col-12 col-md-4">
                        <h5 className="fw-bold mb-3">E-COMMERCE</h5>
                        <p className="mb-0 text-secondary">
                            Il tuo negozio online di fiducia: prodotti selezionati,
                            spedizioni rapide e assistenza sempre disponibile.
                        </p>
                    </div>

                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">Navigazione</h6>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <NavLink className="text-secondary text-decoration-none" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-secondary text-decoration-none" to="/chi-siamo">
                                    Chi siamo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-secondary text-decoration-none" to="/prodotti">
                                    Prodotti
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold mb-3">Servizi</h6>
                        <ul className="list-unstyled mb-0 text-secondary">
                            <li>Spedizione 24/48 ore</li>
                            <li>Reso facile</li>
                            <li>Pagamenti sicuri</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-3">
                        <h6 className="fw-bold mb-3">Contatti</h6>
                        <ul className="list-unstyled mb-0 text-secondary">
                            <li>Email: info@e-commerce.it</li>
                            <li>Telefono: +39 012 345 6789</li>
                            <li>Lun - Ven: 9:00 - 18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="border-top mt-4 pt-3 text-center text-secondary">
                    <small>&copy; 2026 E-COMMERCE. Tutti i diritti riservati.</small>
                </div>
            </div>
        </footer>

    )
}
