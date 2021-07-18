import React from 'react'
import '../../static/css/Slider.css'
import Carousel from 'react-elastic-carousel';
import Slide from './Slide'
import New_Store from './New_Store';
import Top_Store from './Top_Store';


const Slider = ({bool}) => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 250, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ]


    return (
        <div className="App">
            <Carousel breakPoints={breakPoints} >
                {(bool?New_Store:Top_Store).map((val) => <Slide 
                    key={val.id}
                    img={val.img}
                    name={val.name}
                    rating={val.rating}
                    prize={val.prize}
                    desc={val.desc}
                />)}
            </Carousel>
        
        </div>
    )
}

export default Slider

