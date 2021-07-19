import React,{useState} from 'react'
import Login from './Login'
import '../static/css/Buyer.css'
import Fab from '@material-ui/core/Fab';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from '@material-ui/core';
import NavBar from './buyer_temp/NavBar'

import Food from './buyer_temp/subPages/Food';
// import Fruit from './buyer_temp/subPages/Fruit';
import Fashion from './buyer_temp/subPages/Fashion';
import Product from './buyer_temp/subPages/Product';
import SideBar from './buyer_temp/subPages/SideBar';
import MoreInfo from './buyer_temp/MoreInfo';
import Fruit from './buyer_temp/subPages/Fruit';



const Buyer = () => {



    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(true)
    const [what, setWhat] = useState('home')
    const [obj, setObj] = useState({})
    const [title, setTitle] = useState('')


    const [like, setLike] = useState([])
    const [cart, setCart] = useState([])

    const useMe = () => {
        if(what==='home'){
            console.log(like);
            console.log(cart);
            return <Product setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
            // return <Food setLike={setLike} setCart={setCart} setWhat={set} />
        }else if(what==='food'){
            console.log(like);
            console.log(cart);
            // return <Product setLike={setLike} setCart={setCart}/>
            return(
                <>
                <h3>Food Products</h3>
                <Food setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                </> 
            )
        }else if(what==='fruit'){
            console.log(like);
            console.log(cart);
            return (
                <>
                <h3>Fruit and Veg Products</h3>
                <Fruit setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                </>
            )
        }else if(what==='fashion'){
            console.log(like);
            console.log(cart);
            return (
                <>
                <h3>Fashion Products</h3>
                <Fashion setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                </>
            )
        }else if(what==='more'){
            return <MoreInfo obj={obj} title={title} setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
        }
    }



    
    return (
        <>
        <NavBar meth1={setShow1} meth2={setShow2} />
        <div className="buy_main">
            <div style={{display: show1 ? 'block':'none'}}>
            <Login meth1={setShow1} meth2={setShow2} />
            </div>
            <div style={{display: show2 ? 'block':'none'}} className='product_container'>
                <SideBar setWhat={setWhat}/>
                        <div className='product'>
                            {useMe()}
                        </div>
                <div className='cart_btn'>
                        <Tooltip title="Go to CartList"> 
                    <Fab color="secondary" aria-label="add" >
                        <ShoppingCartRoundedIcon />
                    </Fab>
                    </Tooltip>
                </div>
            </div>
            <ToastContainer style={{width:'28%'}}/>
        </div>
        </>
    )
}

export default Buyer
