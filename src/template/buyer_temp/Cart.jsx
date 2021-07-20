import React from 'react'
import SideBar from './subPages/SideBar'
import '../../static/css/Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Cart = (props) => {

    const SideBar  = () => {
        return(

            <div className="side_bar" onClick={()=>props.setShow3(true)}>
                            <Tooltip title='home'>

                            <span onClick={()=>props.setWhat('home')}><HomeRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='food'>

                            <span onClick={()=>props.setWhat('food')}><FastfoodRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='fruit and veg'>

                            <span onClick={()=>props.setWhat('fruit')}><KitchenRoundedIcon/></span>
                            </Tooltip>
                            <Tooltip title='fashion'>

                            <span onClick={()=>props.setWhat('fashion')}><DevicesOtherRoundedIcon /></span>
                            </Tooltip>
                            <Tooltip title='men'>

                            <span onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><PersonRoundedIcon /> </span>
                            </Tooltip>
                            <Tooltip title='women'>

                            <span onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><FaceRoundedIcon /> </span>
                            </Tooltip>
                            <Tooltip title='kids'>

                            <span onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><EmojiEmotionsRoundedIcon /></span>
                            </Tooltip>
                            
                    </div>
        )
    }


    return (
        <div className='cart_main_div'>
            {SideBar()}
            <div className='cart_details'>
                <div className='vertical_coro'>
                    {/* {props.like.map((val)=> val.name)} */}
                    
                </div>
            </div>
        </div>
    )
}

export default Cart
