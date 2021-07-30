import React from 'react'
import Fashion_store from '../store/Fashion_store'
import Slide from '../Slide'

const Fashion = ({setLike,setCart,toast,setWhat,setBack,setObj, setTitle}) => {
    return (
        Fashion_store.map((val) => <Slide 
                    key={val.id}
                    id={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    qnt={val.qnt}
                    title={val.title}
                    desc={val.desc}
                    setLike={setLike} setCart={setCart}
                    toast={toast}
                    setWhat={setWhat}
                    setBack={setBack}
                    setObj={setObj} setTitle={setTitle}
                />)
    )
}

export default Fashion
