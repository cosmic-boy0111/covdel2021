import React,{useState} from 'react'
import Login from './Login'
import Popup from "reactjs-popup";
import NavBar from './buyer_temp/NavBar';
import Slider from './buyer_temp/Slider';
import Food_store from './buyer_temp/store/Food_store';
import Fruit_store from './buyer_temp/store/Fruit_store';
import Fashion_store from './buyer_temp/store/Fashion_store';
import '../static/css/Buyer.css'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Button from '@material-ui/core/Button';
import Slide from './buyer_temp/Slide';
import Fab from '@material-ui/core/Fab';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Food = () => {
    return(
        Food_store.map((val) => <Slide 
                    key={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    desc={val.desc}
                />)
    )
}

const Fruit = () => {
    return(
        Fruit_store.map((val) => <Slide 
                    key={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    desc={val.desc}
                />)
    )
}

const Fashion = () => {
    return (
        Fashion_store.map((val) => <Slide 
                    key={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    desc={val.desc}
                />)
    )
}


const Product = () =>{
    return(
        <div className='product'>
                    <h3>New Products</h3>
                    <div className="new_product_div"><Slider bool={true}/></div>
                    <h3>Top Products</h3>
                    <div className="top_product_div"><Slider bool={false}/></div>
                    <h3>Our Products</h3>
                    <div className="All_product_div">
                        <Food />
                        <Fruit />
                        <Fashion />
                    
                    </div>
                    
                </div>
    )
}

const SideBar = () => {
    return(
        <div className="side_bar">
                        <div><FastfoodRoundedIcon />
                            <a href="/food">
                             food <KeyboardArrowRightRoundedIcon/> 
                            </a>
                        </div>
                        <div><KitchenRoundedIcon/> 
                            <a href="/fruitVeg">
                             fruit and veg <KeyboardArrowRightRoundedIcon/>
                            </a>
                        </div>
                        <div><DevicesOtherRoundedIcon />
                            <a href="/fashion">
                                fashion <KeyboardArrowRightRoundedIcon/>
                            </a>
                        </div>
                        <div><PersonRoundedIcon /> men <KeyboardArrowRightRoundedIcon/></div>
                        <div><FaceRoundedIcon /> women <KeyboardArrowRightRoundedIcon/></div>
                        <div><EmojiEmotionsRoundedIcon /> kids <KeyboardArrowRightRoundedIcon/></div>
                </div>
    )
}


const Buyer = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(true)


    
    return (
        <>
        <NavBar meth1={setShow1} meth2={setShow2} />
        <div className="buy_main">
            <div style={{display: show1 ? 'block':'none'}}>
            <Login meth1={setShow1} meth2={setShow2} />
            </div>
            <div style={{display: show2 ? 'block':'none'}} className='product_container'>
                            <SideBar />
                            <Product />
                <div className='cart_btn'>
                    <Fab color="secondary" aria-label="add" >
                        <ShoppingCartRoundedIcon />
                    </Fab>
                </div>
                {/* <div className='product'></div> */}
            </div>
        </div>
        </>
    )
}

export default Buyer
