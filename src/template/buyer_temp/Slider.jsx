import React from 'react'
import '../../static/css/Slider.css'
import Carousel from 'react-elastic-carousel';
import Slide from './Slide'
import New_Store from './New_Store';
import Top_Store from './Top_Store';
import uuid from 'react-uuid'



const Slider = (props) => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 250, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ]

    // const arr = props.arr;

    return (
        <div className="App">
            <Carousel breakPoints={breakPoints} >
                {
                    (props.arr).map((val) => <Slide 
                    key={val.id}
                    id={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    title={val.title}
                    desc={val.desc}
                    setLike={props.setLike} setCart={props.setCart}
                    toast={props.toast}
                    setWhat={props.setWhat}
                    setObj={props.setObj} setTitle={props.setTitle}
                />)}
            </Carousel>
        
        </div>
    )
}

export default Slider

