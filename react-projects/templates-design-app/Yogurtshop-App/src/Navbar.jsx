import logo from './assets/logo.png'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="nav justify-content-center">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}



export default Navbar