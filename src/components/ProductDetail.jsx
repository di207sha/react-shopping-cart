import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./data1";
import Product from "./product";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id === parseInt(id));
        setProduct(filterProduct[0]);
    }, [id]);

    useEffect(() => {
        if (product) {
            const related = items.filter(
                (sana) => sana.category === product.category && sana.id !== product.id
            );
            setRelatedProducts(related);
}},[product]);
    
    if (!product) {
        return <div>Loading...</div>; // or "Product not found"
    }
    return (
        <>
            
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt="{product.title}" />
                </div>
                <div className="text-center">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">{product.price} ₹</button>
                    <button
                        onClick={() =>
                            addToCart(
                                product.id,
                                product.price,
                                product.title,
                                product.description,
                                product.imgSrc
                            )
                        }
                        className="btn btn-warning"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
            
            <h1 className="text-center">Related Products</h1>
            <Product items={relatedProducts} ></Product>
        </>
    )
};
export default ProductDetail;