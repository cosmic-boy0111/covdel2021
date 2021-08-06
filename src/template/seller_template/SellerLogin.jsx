
import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const StoreLogin = () => {

    const history = useHistory();

    const [info, setInfo] = useState(
        JSON.parse(localStorage.getItem('store_details'))===null ? {
        Sname:'',
        Oname:'',
        Gmail:'',
        Phone:'',
        Pass:''
    }: 
     JSON.parse(localStorage.getItem('store_details'))
    )

    const inputEvent = (e) =>{
        const {value,name} = e.target;
        setInfo((pre)=>{
            return {
                ...pre,
                [name]:value
            }
        })
    }

    const submited = (e) =>{
        e.preventDefault();
        localStorage.setItem('store_details',JSON.stringify(info))
        history.push('/seller');
    }



    return (
        <>
        <h2 style={{textAlign:'center'}}>Create Your e-shop</h2>
        <div className='login_card2'>
                <form onSubmit={submited}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Your Store Name</label>
                    <input type="text" className="form-control" name='Sname'  required onChange={inputEvent} value={info.Sname}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" required name='Oname' onChange={inputEvent} value={info.Oname}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Contact No</label>
                    <input type="tel" className="form-control" pattern='[0-9]{10}' title='enter valid phone no 10 digits' required name='Phone' onChange={inputEvent} value={info.Phone}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name='Gmail' onChange={inputEvent} value={info.Gmail}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required name='Pass' onChange={inputEvent} value={info.Pass}/>
                </div>
                <Button type="submit" variant="contained" color="primary" >Submit</Button>
                </form>
        </div>
        </>
    )
}

export default StoreLogin;