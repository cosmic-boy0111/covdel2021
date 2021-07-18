import React from 'react'
import Button from '@material-ui/core/Button';
import '../static/css/LoginPage.css'
import logo from '../static/images/shopping-online-removebg-preview.png'


const LoginPage = () => {
    return (<>
        <div className='log_main'>
            <div className='info_div'>
                <h1 className="store_name"> Welcome to Store Name</h1>
                <p className='about_store'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsum.</p>
                <p className='about_store'>Select you field</p>
                <div className='btn_div'>
                <a href="/buyer" className='link'>
                    <Button variant="contained" color="secondary"> buyer</Button>
                </a>
                <a href="../../public/index.html" className='link'>

                    <Button variant="contained" color="secondary">seller</Button>
                </a>
                <a href="../../public/index.html" className='link'>

                    <Button variant="contained" color="secondary">sender</Button>
                </a>
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
