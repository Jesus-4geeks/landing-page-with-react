const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark px-4">
            <div className="container-fluid">

                {/* Brand */}
                <a className="navbar-brand align-items-center text-white" href="#">
                    Start Bootstrap
                </a>

                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars text-secondary"></i>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;