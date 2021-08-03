import React from 'react'
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';



const Header = ({details,setShow}) =>{
    return(
        <>

            <header>
                <div className='first'>
                    <StoreMallDirectoryRoundedIcon style={{ fontSize: 70 }} />
                    <h1>{details.Sname}</h1>
                </div>
                
                <div className='owner'>
                    <p>{details.Oname} <br /> {details.Gmail} <br />{details.Phone} </p>
                    {/* <p></p>
                    <p></p> */}
                    <IconButton aria-label="delete" variant="outlined" className='edit' onClick={()=>setShow(true)} >
                        <EditRoundedIcon fontSize="small" color='secondary' />
                    </IconButton>
                </div>
            </header>
        </>
    )
}

export default Header;