import "./css/navbar.css"
import LogoImage from "/images/logo.png"
import NavIconImage from "/images/nav-icon.png"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-container">
                <a className="navbar-brand" href="#"><img src={LogoImage} alt="" className="nav-brand-image"></img><span className="nav-brand-text">Pop Rock Crystal</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                        <li className="nav-item icon">
                            <a className="nav-link"><img src={NavIconImage}></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
