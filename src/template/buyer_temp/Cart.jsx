import React,{useState} from 'react'
import '../../static/css/Cart_Page.css'

import Carousel from 'react-elastic-carousel';
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const Cart = (props) => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 250, itemsToShow: 2},
        {width: 500, itemsToShow: 4},
        {width: 1500, itemsToShow: 4},
    ]

    const [show2, setShow2] = useState(true)
    const [total, setTotal] = useState(
        ()=>{
            var sum = 0;
            props.cart.forEach(e => {
                sum = sum + parseInt(e.prize);
            })

            return sum;
        }
    )


    function AddToCart(val){
        setShow2(false)
      props.setCart((pre)=>{
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== val.id){
            p.push(e);
          }else{
            bool = false;
            // return props.toast('Already Added in Cart',{type:'error',position:'bottom-left'})
          }
        });
        
        if(bool){
            setTotal(total+parseInt(val.prize))
        }

        bool?props.toast('Added in Cart',{
          type:'info',position:'bottom-left',autoClose: 2000})
          :props.toast('Already Added in Cart',{
            type:'error',position:'bottom-left',autoClose: 2000})
        
        var t = JSON.parse(localStorage.getItem('like'));
        props.setLike(t.filter((e)=>{
            return e.id!==val.id;
        }))


        localStorage.setItem('like',JSON.stringify(t.filter((e)=>{
            return e.id!==val.id;
        })));

        

        localStorage.setItem('cart',JSON.stringify([...p,val]))

        return [val,...p]
      })
    }

    function Delete(Cval) {
        props.setCart((pre)=>{

            localStorage.setItem('cart',JSON.stringify(
                JSON.parse(localStorage.getItem('cart')).filter((val)=>{
                    return val.id!==Cval.id;
                })
            ))

            setTotal(total-parseInt(Cval.prize))

            props.toast('Remove from Cart',{
          type:'dark',position:'bottom-left',autoClose: 2000})

            return pre.filter((val)=>{
                return val.id!==Cval.id;
            })
        })
    }


    
    return (
        <>
            <div className='wish_list' style={{display:props.like.length===0?'none':'block'}}>
                <Carousel breakPoints={breakPoints} >
                    {
                        props.like.length===0? <div>hello </div> :props.like.map((val)=>{
                            return (
                                <div className="cart_card_main">
                                    <div className="cart_card_body">
                                        <img src={val.img} alt="" />
                                        <div className="cart_card_details">
                                            <p>{val.name}</p>
                                            <p>${val.prize}</p>
                                        </div>
                                        <IconButton aria-label="delete" onClick={()=>AddToCart(val)}>
                                            <AddRoundedIcon style={{color:'#3f51b5'}}/>
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                </Carousel>
            </div>
                <div className='cart_card_list'>
                    <h3 style={{textAlign:'center'}}>Cart List</h3>
                    <div className='cart_container' style={{height:props.like.length===0?'70vh':'48vh'}}>
                        {
                            props.cart.length===0? <div style={{textAlign:'center'}}>Cart List is Empty!!! 😧</div> :props.cart.map((val)=>{
                                return (
                                    <div className="cart_card_main2">
                                        <div className="cart_card_body2">
                                            <img src={val.img} alt="" />
                                            <div className="cart_card_details">
                                                <p>{val.name}</p>
                                                <p>${val.prize}</p>
                                            </div>
                                            <IconButton aria-label="delete" className='del_btn' onClick={()=>Delete(val)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart_card_btn">
                        <div>
                            Total: ${total}
                        </div>
                        <Button variant="contained" color="primary">
                            proceed
                        </Button>
                    </div>
                </div>
        </>
    )
}

export default Cart

