import ProductButton from "./ProductButton"
import "./css/advertise.css"
import ProductImage from "/images/product.png"
import Vector2Image from "/images/vector2.png"

export default function AdvertiseSection() {
    return (
        <section id="advertise" className="">
        <img src={Vector2Image} className="vector2"/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="advertise-product">
                        <h2>BEST PRICE</h2>
                        <h1>Agate Phone Grip</h1>
                        <div className="product-price my-4 ms-auto">
                            <span>44.50$</span>
                            <span>19.50$</span>
                        </div>
                        <p className="mb-4">These Pop Rock Crystal grip tops can be swapped with<br /> other tops
                            depending on your mood, outfit, nails,<br /> phone case, holiday, etc.! Just gently
                            squeeze the sides<br /> to remove and swap out with another color or design!
                        </p>
                        <ProductButton text="BUY NOW" sizeCss="large-btn" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cricel-box">
                        <div className="outer-cricel">
                            <div className="inner-cricle">
                                <div className="circle-image">
                                    <img src={ProductImage} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
