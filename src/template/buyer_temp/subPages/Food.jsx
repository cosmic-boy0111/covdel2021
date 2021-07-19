import React from 'react'
import Food_store from '../store/Food_store'
import Slide from '../Slide'

const Food = ({setLike,setCart,toast,setWhat,setObj, setTitle}) => {
    return(
        Food_store.map((val) => <Slide 
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

export default Food
