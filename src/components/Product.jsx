import "./css/product.css"
import ProductButton from "./ProductButton"
import ProductImage from "/images/product.png"

export default function Product() {
  return (
    <div className="col-lg-3">
      <div className="product my-3">
        <img src={ProductImage} />
        <p className="my-4">Crystal Agate Phone Grip <br /><span>18.99$</span></p>
        <ProductButton text="BUY NOW" sizeCss="large-btn"/>
      </div>
    </div>
  )
}
 