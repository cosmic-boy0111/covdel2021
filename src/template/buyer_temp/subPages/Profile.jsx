import React,{useState} from 'react'
import '../../../static/css/profile.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

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

    const [img, setImg] = useState(JSON.parse(localStorage.getItem('pro_img')));

    const doTwo = (e) =>{
        setImg(e.target.files[0].name)
        localStorage.setItem('pro_img',JSON.stringify(e.target.files[0].name))
        console.log(e.target.files[0].name);
    }

    const closed = () => {
        meth1(false)
        meth2(true)
    }

    return (
        <div className='login_card'>
            <div className="profile_info">
                <span>{img===null?
                <>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={(e)=>doTwo(e)}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                </>: <PhotoCamera />
                }
                </span>
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
