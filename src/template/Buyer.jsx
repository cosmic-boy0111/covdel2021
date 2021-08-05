import React, { useState,useEffect } from "react";
import Login from "./Login";
import "../static/css/buyer_css/Buyer.css";
import Fab from "@material-ui/core/Fab";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "@material-ui/core";
import NavBar from "./buyer_temp/NavBar";

import Food from "./buyer_temp/subPages/Food";
// import Fruit from './buyer_temp/subPages/Fruit';
import Fashion from "./buyer_temp/subPages/Fashion";
import Product from "./buyer_temp/subPages/Product";
import SideBar from "./buyer_temp/subPages/SideBar";
import MoreInfo from "./buyer_temp/MoreInfo";
import Fruit from "./buyer_temp/subPages/Fruit";
import Cart from "./buyer_temp/Cart";
import Profile from "./buyer_temp/subPages/Profile";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const Buyer = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [load, setLoad] = useState(true)
  const [dis, setDis] = useState(true);
  const [dis2, setDis2] = useState("");
  const [what, setWhat] = useState("home");
  const [back, setBack] = useState([]);
  const [obj, setObj] = useState({});
  const [title, setTitle] = useState("");
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("like")) === null
      ? []
      : JSON.parse(localStorage.getItem("like"))
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );
  

  


  const useMe = () => {
    if (what === "home") {
      console.log(like);
      console.log(cart);
      return (
        <Product
          setLike={setLike}
          setCart={setCart}
          toast={toast}
          setWhat={setWhat}
          setBack={setBack}
          setObj={setObj}
          setTitle={setTitle}
        />
      );
      // return <Food setLike={setLike} setCart={setCart} setWhat={set} />
    } else if (what === "food") {
      console.log(like);
      console.log(cart);
      // return <Product setLike={setLike} setCart={setCart}/>
      return (
        <>
          <h3>Food Products</h3>
          <div className="res_div2">
            <Food
              setLike={setLike}
              setCart={setCart}
              toast={toast}
              setWhat={setWhat}
              setBack={setBack}
              setObj={setObj}
              setTitle={setTitle}
            />
          </div>
        </>
      );
    } else if (what === "fruit") {
      console.log(like);
      console.log(cart);
      return (
        <>
          <h3>Fruit and Veg Products</h3>
          <div className="res_div2">
            <Fruit
              setLike={setLike}
              setCart={setCart}
              toast={toast}
              setWhat={setWhat}
              setBack={setBack}
              setObj={setObj}
              setTitle={setTitle}
            />
          </div>
        </>
      );
    } else if (what === "fashion") {
      console.log(like);
      console.log(cart);
      return (
        <>
          <h3>Fashion Products</h3>
          <div className="res_div2">
            <Fashion
              setLike={setLike}
              setCart={setCart}
              toast={toast}
              setWhat={setWhat}
              setBack={setBack}
              setObj={setObj}
              setTitle={setTitle}
            />
          </div>
        </>
      );
    } else if (what === "more") {
      return (
        <MoreInfo
          obj={obj}
          title={title}
          setLike={setLike}
          setCart={setCart}
          toast={toast}
          setWhat={setWhat}
          setBack={setBack}
          setObj={setObj}
          setTitle={setTitle}
        />
      );
    } else if (what === "cart") {
      return (
        <Cart
          like={like}
          cart={cart}
          setLike={setLike}
          setCart={setCart}
          toast={toast}
        />
      );
    }
  };

  const useMe2 = () => {
    if (dis2 === "login") {
      return <Login meth1={setShow1} meth2={setShow2} />;
    } else if (dis2 === "profile") {
      return <Profile meth1={setShow1} meth2={setShow2} />;
    }
  };

  const GoToBack = () =>{
    console.log(back);
    if(back.length!==0){
      setWhat(back[back.length-1]);
      var l = back.pop();
    }
    console.log(back);
  }



  return (
    <div className='page'>
      
      <NavBar
        meth1={setShow1}
        meth2={setShow2}
        setDis2={setDis2}
        setWhat={setWhat}
        setBack={setBack}
        toast={toast}
      />
      <div className="buy_main" style={{ display: show3 ? "block" : "none" }}>
        <div style={{ display: show1 ? "block" : "none" }}>{useMe2()}</div>
        <div
          style={{ display: show2 ? "block" : "none" }}
          className="product_container"
        >
          <SideBar setWhat={setWhat} setBack={setBack} dis={dis} setDis={setDis} />
          <div
            className="cart_btn"

            onClick={() => {
              setWhat(

                (pre)=>{
                              setBack((pre2)=>{
                                   if(pre!==pre2[pre2.length-1]){
                                        return [...pre2,pre]
                                   }else{
                                        return [...pre2]
                                   }
                              })
                              return 'cart';
                         }

              )
            }}
            style={{display:what==='cart'?'none':'inline'}}
          >
            <Tooltip title="Go to CartList">
              <Fab color="secondary" aria-label="add">
                <ShoppingCartRoundedIcon />
              </Fab>
            </Tooltip>
          </div>
          <div
            className="pre_btn"
            // style={{
            //   bottom:what==='cart'?'0.5rem':'4.5rem'
            // }}
            onClick={()=>GoToBack()}
          >
            <Tooltip title="previous">
            <Fab size="small" color="primary" variant='outlined' aria-label="add" >
              <ArrowBackIosRoundedIcon />
            </Fab>
            </Tooltip>
          </div>
          <div className="product" style={{visibility:load?'visible':'hidden'}}>
            {useMe()}
          </div>
        </div>

        <ToastContainer />
      </div>
      
    </div>
  );
};

export default Buyer;


