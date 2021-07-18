import React from 'react'
import logo from '../../static/images/shopping-online-removebg-preview.png'
import '../../static/css/NavBar.css'
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
// import Alert from '@material-ui/lab/Alert';

// import Selectme from './Selectme';


const NavBar = ({meth1,meth2}) => {

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
        <div>
        <img src={logo} alt="" className='nav_logo'/>
        <span>Store Name </span> 
        </div>
        {/* <div className='select_div'>
        
        <select className="form-select " aria-label="Default select example" onChange={(e) => console.log(e.target.value)}>
          <option selected> Select Your Search Field</option>
          <option value="food">Food</option>
          <option value="fruit">Fruit & vegetables</option>
          <option value="fashion">Fashion Accessories</option>
        </select>
        </div> */}
        <div className='nav_btn_group'>
          <Button variant="contained" color="primary"  className='nav_btn1' onClick={func1}>
            Login
          </Button>
          <Button variant="contained" color="secondary" className='nav_btn1' onClick={check2}>
            Logout
          </Button>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
