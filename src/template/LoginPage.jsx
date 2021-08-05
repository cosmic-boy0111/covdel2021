import React from 'react'
import Button from '@material-ui/core/Button';
import '../static/css/buyer_css/LoginPage.css'
import logo from '../static/images/undraw_shopping_app_flsj.svg'
import {NavLink} from  'react-router-dom'


const LoginPage = () => {
    return (<>
        <div className='log_main'>
            <div className='info_div'>
                <span>

                <h1 className='store_name2'> Welcome</h1>
                <h1 className="store_name"> Store Name</h1>
                </span>
                <p className='about_store'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsum.</p>
                <p className='about_store'>Select your field</p>
                <div className='btn_div'>
                <NavLink to="/buyer" className='link'>
                    <Button variant="outlined" color="primary"> buyer</Button>
                </NavLink>
                <NavLink to="/seller" className='link'>

                    <Button variant="outlined" color="primary">seller</Button>
                </NavLink>
                <NavLink to="/error" className='link'>
                    <Button variant="outlined" color="primary">sender</Button>
                </NavLink>
                </div>
            </div>
            <div className='page_img' >
                <img src={logo} alt="logo img" />
            </div>
        </div>
        
        </>
    )
}

export default LoginPage
