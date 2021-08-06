import React from 'react'
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {useHistory} from 'react-router-dom'



const Header = ({details}) =>{

    const history = useHistory();

    return(
        <>

            <header>
                <div className='first'>
                    <StoreMallDirectoryRoundedIcon style={{ fontSize: 70 }} />
                    <h1>{details.Sname}</h1>
                </div>
                
                <div className='owner'>
                    <p>{details.Oname} <br /> {details.Gmail} <br />{details.Phone} </p>
                    <Button variant="outlined" className='edit' onClick={()=>history.push('/sellerlogin')} style={{marginBottom: '7px'}}>
                       {  JSON.parse(localStorage.getItem('store_details'))===null?'Sign in' : <EditRoundedIcon fontSize="small" color='secondary' />}
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header;