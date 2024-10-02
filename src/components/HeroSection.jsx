import "./css/heroSection.css"
import Navbar from "./Navbar"
import ProductImage from "/images/product.png"
import Vector1Image from "/images/vector1.png" 
import SrollImage from "/images/sroll.png"

export default function HeroSection() {
    return (
        <section id="hero" className="">
            <div className="hero-container">
                <Navbar />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="details">
                            <div className="deatils-content">
                                <h2>Welcome to</h2>
                                <h1>Pop Rock Crystal Shop!</h1>
                                <p>Here you will find unique phone accessories,
                                    crystals, jewelry and more. Free shipping inside the U.S.
                                    and our phone grips come with a limited warranty. Enjoy!
                                </p>
                            </div>
                            <div className="details-button-container">
                                <button className="btn shop-btn">SHOP NOW</button>
                                <button className="btn text-button">about us</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-carsouel-container">
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    <div className="dots">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ProductImage} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Crystal Agate Phone Grip <span>- 18.99$</span></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ProductImage} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Crystal Agate Phone Grip <span>- 18.99$</span></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ProductImage} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Crystal Agate Phone <span>- 18.99$</span></p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon prev-btn" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon next-btn" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Vector1Image} className="vector1" />
            <div className="sroll">
                <img src={SrollImage} alt="" />
                <p className="mt-2">Scroll down</p>
            </div>
        </section>
    )
}



{/* <svg xmlns="http://www.w3.org/2000/svg" className="wave1" viewBox="0 0 1440 320">
                <path fill="#fff" fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,85.3C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,
                     320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg> */}