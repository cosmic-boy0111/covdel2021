import React,{useState} from 'react'
import '../static/css/Login.css'
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


const Login = ({meth1,meth2}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const check = () =>{
        if(email!=='' && pass!==''){
            localStorage.setItem('email',JSON.stringify(email));
            meth1(false)
            meth2(true)
        }
    }

    const closed = () => {
        meth1(false)
        meth2(true)
        setEmail('')
        setPass('')
    }

    return (
        <div className='login_card'>
            {/* <form onSubmit={check}> */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPass(e.target.value)} value={pass}/>
                </div>
                <Button type="submit" variant="contained" color="primary" onClick={check} >Submit</Button>
            <Button variant="outlined" onClick={closed} style={{marginLeft:'1rem'}}>
                 <CloseRoundedIcon />
            </Button>
            {/* </form> */}
        </div>
    )
}

export default Login
