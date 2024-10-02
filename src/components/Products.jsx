import Product from "./Product";
import ProductButton from "./ProductButton";
import "./css/products.css"

export default function Products() {
    return (
        <section id="products" className="sections-padding">
            <h3 className="mb-5">All Products</h3>
            <div className="row mb-5">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <ProductButton text="View All" sizeCss="small-btn" />
        </section>
    )
}


