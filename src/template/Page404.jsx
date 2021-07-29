import React from 'react'
import logo from '../static/images/undraw_page_not_found_su7k.svg'

const Page404 = () => {
    return (
        <div style={
            {
                width:'100%',
                height:'100vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'canter'
            }
        }>
            <div style={
                {
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }
            }>
            <img src={logo} alt="" style={{
                width:'50%'
            }}/>
            <h1 style={{
                alignSelf:'center',
                fontSize:'1.5rem'
                
            }}>Page Not Found</h1>
            </div>
        </div>
    )
}

export default Page404;
