import React from 'react'
import logo from '../../static/images/shopping-online-removebg-preview.png'
import '../../static/css/buyer_css/NavBar.css'
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DropDown from './subPages/DropDown';
import Drawer from './subPages/Drawer'

// import Alert from '@material-ui/lab/Alert';

// import Selectme from './Selectme';


const NavBar = ({meth1,meth2,setDis2,setWhat,setBack,toast}) => {

  const func1 = () => {
    if(JSON.parse(localStorage.getItem('email'))===null){
      meth1(true)
      meth2(false)
    }else{
      alert('you are already logged in');
      // <Alert severity="info">you are already logged in</Alert>
    }
  }

  const check2 = () =>{
    if(JSON.parse(localStorage.getItem('email'))===null){
      alert('kindly login');
    }else{
      if(window.confirm('do you really wants to log out')===true){
        localStorage.removeItem('email');
      }
      // console.log(t);
    }
  }

  return (
    <nav  className='navbar'>
      <div className='nav_div'>
        <div className='with_drawer'>
        <span className='drawer'><Drawer setWhat={setWhat} setBack={setBack} toast={toast}/></span>
        <img src={logo} alt="" className='nav_logo'/>
        <span className='st_name'>Store Name </span> 
        </div>
        <div className='nav_btn_group'>
          <DropDown meth1={meth1} meth2={meth2} setDis2={setDis2}/>
        </div>

      </div>
    </nav>
  )
}

export default NavBar