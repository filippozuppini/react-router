import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <header className="site-header sticky-top">
            <nav className="navbar navbar-expand-lg bg-white border-bottom">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold brand-link" to="/">
                        E-COMMERCE
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Apri menu di navigazione"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-3" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-3" to="/chi-siamo">
                                    Chi siamo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-3" to="/prodotti">
                                    Prodotti
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
