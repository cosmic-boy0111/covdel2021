import React,{useState} from 'react'
import '../static/css/seller_css/seller.css';
import Add from './seller_template/Add';
import Header from './seller_template/Header';
import List from './seller_template/List';
import Button from '@material-ui/core/Button';



const StoreLogin = ({details,setSotre_details,setShow}) => {

    const inputEvent = (e) =>{
        const {value,name} = e.target;
        setSotre_details((pre)=>{
            return {
                ...pre,
                [name]:value
            }
        })
    }

    const info_submit = (e) =>{
        e.preventDefault();
        setSotre_details((pre)=>{
            localStorage.setItem('store_details',JSON.stringify(pre));
            console.log(pre);
            return pre;
        })
        setShow(false)

    }

    return (
        <>
        <h2 style={{textAlign:'center'}}>Create Your e-shop</h2>
        <div className='login_card2'>
                <form onSubmit={info_submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Your Store Name</label>
                    <input type="text" className="form-control" name='Sname'  required onChange={inputEvent} value={details.Sname}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" required name='Oname' onChange={inputEvent} value={details.Oname}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Contact No</label>
                    <input type="tel" className="form-control" pattern='[0-9]{10}' title='enter valid phone no 10 digits' required name='Phone' onChange={inputEvent} value={details.Phone}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name='Gmail' onChange={inputEvent} value={details.Gmail}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required name='Pass' onChange={inputEvent} value={details.Pass}/>
                </div>
                <Button type="submit" variant="contained" color="primary" >Submit</Button>
                </form>
        </div>
        </>
    )
}

const Seller = () => {

    const [show, setShow] = useState(
        JSON.parse(localStorage.getItem('store_details'))===null?true:false
    );

    const [store_details, setSotre_details] = useState( JSON.parse(localStorage.getItem('store_details'))===null ? {
        Sname:'',
        Oname:'',
        Gmail:'',
        Phone:'',
        Pass:''
    }: 
     JSON.parse(localStorage.getItem('store_details'))
    )    


    return (
        <>
        <div style={{display:show?'block':'none'}}>
            <StoreLogin details={store_details} setSotre_details={setSotre_details} setShow={setShow}/>
        </div>
        <div className='seller'  style={{display:show?'none':'block'}}>
            <Header details={store_details} setShow={setShow}/>
            <div className='seller_body'>
                <Add />
                <List />
            </div>
        </div>
        </>
    )
}

export default Seller
