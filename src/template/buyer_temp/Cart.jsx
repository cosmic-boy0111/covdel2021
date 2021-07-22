import React,{useState} from 'react'
import SideBar from './subPages/SideBar'
import '../../static/css/Cart.css'

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import Tooltip from '@material-ui/core/Tooltip';
import { LinkedCamera } from '@material-ui/icons';
import Slide from './Slide';
import Button from '@material-ui/core/Button';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import Carousel from 'react-elastic-carousel';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Cart = (props) => {
    
    const SideBar  = () => {
        return(

            <div className="side_bar" style={{top:'0px'}}>
                            <Tooltip title='home' placement="left">

                            <span onClick={()=>{
                                props.setWhat('home')
                                props.setShow3(true)
                            }}><HomeRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='food' placement="left">

                            <span onClick={()=>{
                                props.setWhat('food')
                                props.setShow3(true)
                            }}><FastfoodRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='fruit and veg' placement="left">

                            <span onClick={()=>{
                                props.setShow3(true)
                                props.setWhat('fruit')
                            }}><KitchenRoundedIcon/></span>
                            </Tooltip>
                            <Tooltip title='fashion' placement="left">

                            <span onClick={()=>{
                                props.setWhat('fashion')
                                props.setShow3(true)
                            }}><DevicesOtherRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='men' placement="left">

                            <span onClick={()=>props.toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><PersonRoundedIcon /> </span>
                            </Tooltip>
                            <Tooltip title='women' placement="left">

                            <span onClick={()=>props.toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><FaceRoundedIcon /> </span>
                            </Tooltip>
                            <Tooltip title='kids' placement="left">

                            <span onClick={()=>props.toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><EmojiEmotionsRoundedIcon /></span>
                            </Tooltip>
                            
                    </div>
        )
    }

    const breakPoints = [
        {width: 1, itemsToShow: 2},
        {width: 250, itemsToShow: 3},
        {width: 500, itemsToShow: 4},
        {width: 1046, itemsToShow: 4},
    ]

    
    
    const show2 = true;

    // function funAdd(val){
    //   props.setCart((pre)=>{
    //     var bool = true;
    //     const p = [];
    //     pre.forEach(e => {
    //       if(e.id !== val.id){
    //         p.push(e);
    //       }else{
    //         bool = false;
    //         // return props.toast('Already Added in Cart',{type:'error',position:'bottom-left'})
    //       }
    //     });
        
    //     localStorage.setItem('cart',JSON.stringify([...p,val]))
    //     localStorage.setItem('like',JSON.parse(localStorage.getItem('like')).filter((e)=>{
    //         return e.id!==val.id;
    //     }))
    //     props.setLike(JSON.parse(localStorage.getItem('like')));


    //     bool?props.toast('Added in Cart',{
    //       type:'info',position:'bottom-left',autoClose: 2000})
    //       :props.toast('Already Added in Cart',{
    //         type:'error',position:'bottom-left',autoClose: 2000})

    //     return [...p,val]
    //   })
    // }



    return (
        <div className='cart_main_div'>
            {SideBar()}
            <div className='cart_details'>
            <div style={{display:props.like.length===0?'none':'block'}}>

            <Carousel breakPoints={breakPoints} className='slider' showThumbs={false} showIndicators={false}> 
                {
                    
                    props.like===null || props.like.length === 0?( <div></div> ):props.like.map((val) => {
                        return(
                            <div className="like_card">

                                <img src={val.img} alt="" />
                                <div className="details">
                                    <h6>{val.name}</h6>
                                    <p>{val.prize} </p>
                                        <Tooltip title="Add">
                                            <Button color="primary" >
                                            <AddShoppingCartRoundedIcon style={{color: show2?'#3f51b5':'#2cbc63' }}/>
                                            </Button>
                                        </Tooltip>
                                    
                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
            </div>
                <div className="cart" style={{height:props.like.length === 0?'80vh':'55vh'}}>
                    <h4 style={{textAlign:'center'}}>Cart List</h4>
                    <div className='cart_list'>
                        {
                            props.cart===null || props.cart.length === 0?( <div>Select Items</div> ):props.cart.map((val)=>{
                                return (
                                    <div className="cart_main">
                                        <div className="cart_body">
                                            <img src={val.img} alt="" />
                                            <div className="det">
                                                <p>{val.name}</p>
                                                <p>{val.prize}</p>
                                            </div>
                                            <IconButton aria-label="delete" className='del_btn'>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pro_btn">
                    <Button variant="outlined" color="primary" className="pro_btn"> 
                        Primary
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
