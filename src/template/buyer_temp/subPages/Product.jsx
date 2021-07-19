import React from 'react'
import Slider from '../Slider'
import Food from './Food'
import Fruit from './Fruit'
import Fashion from './Fashion'


const Product = ({setLike,setCart,toast,setWhat,setObj, setTitle}) =>{
    return(
        
                    <>
                    <h3>New Products</h3>
                    <div className="new_product_div"><Slider bool={true} setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/></div>
                    <h3>Top Products</h3>
                    <div className="top_product_div"><Slider bool={false} setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/></div>
                    <h3>Our Products</h3>
                    <div className="All_product_div">
                        <Food setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                        <Fruit setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                        <Fashion setLike={setLike} setCart={setCart} toast={toast} setWhat={setWhat} setObj={setObj} setTitle={setTitle}/>
                    </div>
                    </>
                
    )
}

export default Product
