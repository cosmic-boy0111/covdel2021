import React, { useState } from "react";
import "../../static/css/Cart_Page.css";

import Carousel from "react-elastic-carousel";
import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = (props) => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 250,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 3,
    },
    {
      width: 1500,
      itemsToShow: 4,
    },
  ];

  const [show2, setShow2] = useState(true);
  const [dis2, setDis2] = useState(true);

  const [total, setTotal] = useState(() => {
    var sum = 0;
    props.cart.forEach((e) => {
      if(e.qnt===""){
        sum = sum + parseInt(e.prize) * 0;
      }else{
        sum = sum + parseInt(e.prize) * parseInt(e.qnt);
      }
    });

    return sum;
  });

  function AddToCart(val) {
    setShow2(false);
    props.setCart((pre) => {
      var bool = true;
      const p = [];
      pre.forEach((e) => {
        if (e.id !== val.id) {
          p.push(e);
        } else {
          bool = false;
          // return props.toast('Already Added in Cart',{type:'error',position:'bottom-left'})
        }
      });

      if (bool) {
        setTotal(total + parseInt(val.prize));
      }

      bool
        ? props.toast("Added in Cart", {
            type: "info",
            position: "bottom-left",
            autoClose: 2000,
          })
        : props.toast("Already Added in Cart", {
            type: "error",
            position: "bottom-left",
            autoClose: 2000,
          });

      var t = JSON.parse(localStorage.getItem("like"));
      props.setLike(
        t.filter((e) => {
          return e.id !== val.id;
        })
      );

      localStorage.setItem(
        "like",
        JSON.stringify(
          t.filter((e) => {
            return e.id !== val.id;
          })
        )
      );

      localStorage.setItem("cart", JSON.stringify([...p, val]));

      return [...p, val];
    });
  }

  function Delete(Cval) {
    props.setCart((pre) => {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          JSON.parse(localStorage.getItem("cart")).filter((val) => {
            return val.id !== Cval.id;
          })
        )
      );
      if(Cval.qnt===""){
        setTotal(total);
      }else{
        setTotal(total - parseInt(Cval.prize) * parseInt(Cval.qnt));
      }

      props.toast("Remove from Cart", {
        type: "dark",
        position: "bottom-left",
        autoClose: 2000,
      });

      console.log(props.cart);
      return pre.filter((val) => {
        return val.id !== Cval.id;
      });
    });
  }

  const func = (val, e) => {
    if (!(e.target.value >= 0 && e.target.value<=999))  {
      return alert("please enter valid quantity between 1 and 999");
    }

    val.qnt = e.target.value;
    console.log(val.qnt);
    var t = JSON.parse(localStorage.getItem("cart"));
    t.forEach((item) => {
      if (item.id === val.id) {
        item.qnt = e.target.value;
      }
    });

    props.setCart(t);

    localStorage.setItem("cart", JSON.stringify(t));
    var tt = 0;
    t.forEach((item) => {
      if(item.qnt===""){
        tt += item.prize * 0;
      }else{
        tt += item.prize * item.qnt;
      }
    });

    setTotal(tt);
  };

  return (
    <>
      <div
        className="wish_list"
        style={{ display: props.like.length === 0 ? "none" : "block" }}
      >
        <Carousel breakPoints={breakPoints}>
          {props.like.length === 0 ? (
            <div>hello </div>
          ) : (
            props.like.map((val) => {
              return (
                <div className="cart_card_main">
                  <div className="cart_card_body">
                    <img src={val.img} alt="" />
                    <div className="cart_card_details">
                      <p>{val.name}</p>
                      <p>${val.prize}</p>
                    </div>
                    <IconButton
                      aria-label="delete"
                      onClick={() => AddToCart(val)}
                    >
                      <AddRoundedIcon style={{ color: "#3f51b5" }} />
                    </IconButton>
                  </div>
                </div>
              );
            })
          )}
        </Carousel>
      </div>
      <div className="cart_card_list">
        <h3 style={{ textAlign: "center" }}>Cart List</h3>
        <div
          className="cart_container"
          style={{ height: props.like.length === 0 ? "70vh" : "48vh" }}
        >
          {props.cart.length === 0 ? (
            <div style={{ textAlign: "center" }}>Cart List is Empty!!! 😧</div>
          ) : (
            props.cart.map((val) => {
              return (
                <>
                  <div className="cart_card_main2">
                    <div className="cart_card_body2">
                      <img src={val.img} alt="" />
                      <div className="cart_card_details">
                        <p>{val.name}</p>
                        <p>${val.prize}</p>
                        <input
                          type="number"
                          min="1"
                          // step="1"
                          // placeholder={val.qnt}
                          onChange={(e) => func(val, e)}
                          value={val.qnt}
                          
                        />
                      </div>
                      <IconButton
                        aria-label="delete"
                        className="del_btn"
                        onClick={() => Delete(val)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        <div className="cart_card_btn">
          <div>Total: ${total}</div>
          <Button variant="contained" color="primary">
            proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
