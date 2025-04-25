const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark px-4">
            <div class="container-fluid">

                {/* Brand */}
                <a class="navbar-brand align-items-center text-white" href="#">
                    Start Bootstrap
                </a>

                {/* Toggler */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav align-items-center">
                        
                        <li class="nav-item active">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link text-secondary" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;