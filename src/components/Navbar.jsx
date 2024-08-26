import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {items} from "./data1";
import Product from "./product";
import  { useState } from 'react';
// import { BsFillCartCheckFill } from 'react-icons/bs';
const Navbar=({setData,cart})=>
{
    const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }
  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
//   const hello=()=>
//   {
//     return(<Product></Product>)
//   }
//   const hello=()=>
//   {
//  return <><Link to ={'/'}></Link></>
//   }
// const hello=()=>
// {
//     return(<Product></Product>)
// }
    return(
        <>
            <header className="sticky-top">
                <div className="nav-bar">
                    
                    <Link to={"/"} onClick={()=>setData(items)} className="brand">E-shopping</Link>
                    
                    <form  onSubmit={(handleSubmit)} className="searchbar" >
                        <input  value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search Items" />
                    </form>
                    
                    <Link to={'/cart'} className="cart">
                    <button type="button" class="btn btn-primary position-relative">
  cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
</Link>
                </div>
                {
                location.pathname == '/' && (
                <div className="nav-bar-wraper">
                    <div className="items">Filter By {"->"}</div>
                    <div onClick={()=>setData(items)} className="items">No Filter</div>
                    <div  onClick={()=>filterByCategory('mobiles')}
             className="items">Mobiles</div>
                    <div onClick={()=>filterByCategory('laptops')}
             className="items">Laptops</div>
                    <div onClick={()=>filterByCategory('tablets')} className="items">Tablets</div>
                    <div  onClick={()=>filterByPricr('29999')}className="items">{">="}29999</div>
                    <div onClick={()=>filterByPrice('49999')}className="items">{">="}49999</div>
                    <div onClick={()=>filterByPrice('89999')}className="items">{">="}89999</div>
                    <div onClick={()=>filterByPrice('59999')}className="items">{">="}59999</div>
                </div>
                )}
            </header>
        </>
    );
};
export default Navbar;