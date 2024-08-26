import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
const Product = ({ items, cart, setCart }) => {

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        if(!itemInCart){
        setCart([...cart, obj]);

        toast.success('Item added on cart', {
            position: "top-right",
            autoClose: 5001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    else {
        toast.info('Item already in cart', {
            position: "top-right",
            autoClose: 5001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5001}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>

            <div className="container my-5 ">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className="col-lg-4  col-lg-4 my-3 text-center ">
                                        <div className="card" style={{ width: '18rem', height: '60vh', margin: '20px' }}>
                                            <Link to={`/product/${product.id}`} style={{ display: 'felx', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            </Link>

                                            <div clNamessName="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className="btn btn-primary mx-3 ">{product.price}{" "}₹</button>
                                                <button
                                                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                                    className="btn btn-warning"
                                                >Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    }

                </div>
            </div>
        </>
    )
}
export default Product;
