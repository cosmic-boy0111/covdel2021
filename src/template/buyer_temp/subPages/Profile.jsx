import React,{useState} from 'react'
import '../../../static/css/buyer_css/profile.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import logo from '../../../static/images/undraw_male_avatar_323b.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const Profile = ({meth1,meth2}) => {


    const classes = useStyles();

    const [img, setImg] = useState(
        JSON.parse(localStorage.getItem('img'))===null?logo:JSON.parse(localStorage.getItem('img'))
    )


    const closed = () => {
        meth1(false)
        meth2(true)
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImg(reader.result)
                localStorage.setItem('img',JSON.stringify(reader.result))
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className='login_card'>
            <div className="profile_info">
                <img src={img} alt="" />
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={imageHandler}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <div>{JSON.parse(localStorage.getItem('user'))}</div>
                <div>Gmail : {JSON.parse(localStorage.getItem('email'))}</div>
            </div>
            <IconButton aria-label="delete" onClick={closed} className='close'>
                <CloseRoundedIcon />
            </IconButton>
        </div>
    )
}

export default Profile
