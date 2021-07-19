import React from 'react'
import Fruit_store from '../store/Fruit_store';
import Slide from '../Slide';

const Fruit = ({setLike,setCart,toast,setWhat,setObj, setTitle}) => {
    return(
        Fruit_store.map((val) => <Slide 
                    key={val.id}
                    id={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    title={val.title}
                    desc={val.desc}
                    setLike={setLike} setCart={setCart}
                    toast={toast}
                    setWhat={setWhat}
                    setObj={setObj} setTitle={setTitle}
                />)
    )
}

export default Fruit;