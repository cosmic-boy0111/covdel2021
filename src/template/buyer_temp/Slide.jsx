import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import Tooltip from '@material-ui/core/Tooltip';


const Slide = (props) => {

    // const [show, setShow] = useState(false)

    return (
        <div className="cards">
      <div className="card">
      <img src={props.img} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.name}</span>
          <h5 className="card__title"><GradeRoundedIcon style={{color:'gold'}}/>{props.rating} {props.prize}</h5>
          {/* <Button color="primary" >  */}
          <Tooltip title="Like">
            <FavoriteRoundedIcon style={{color:'blue'}}/>

          </Tooltip>
            {/* </Button> */}
            <Tooltip title="Add">

            <Button color="primary">
            <AddRoundedIcon />
            </Button>
            </Tooltip>
        </div>
      </div>
    </div>

    )
}

export default Slide