import React,{useState,useEffect} from 'react'
import Divider from '@material-ui/core/Divider';
import logo from '../../static/images/undraw_empty_xct9.svg'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import avatar from '../../static/images/undraw_male_avatar_323b.svg'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



const ResList = ({setTog}) => {

    const [orders, setOrders] = useState(
        JSON.parse(localStorage.getItem('order_list'))===null?[]: JSON.parse(localStorage.getItem('order_list')) 
    )

    useEffect(()=>{
        setOrders(
            JSON.parse(localStorage.getItem('order_list'))===null?[]: JSON.parse(localStorage.getItem('order_list'))  
        )
    },[])

    const deleteItem = (idx,id) =>{
        console.log('deleted');
        var temp = JSON.parse(localStorage.getItem('order_list'));
        var t = temp[idx].cart.filter((e)=>{
            return e.id!==id;
        })
        temp[idx].cart = t;
        if(t.length===0){
            temp.splice(idx,1);
        }
        console.log(temp);
        localStorage.setItem('order_list',JSON.stringify(temp));
        setOrders(temp)
    }

    return (
        <>
                
                        <h5> Order's List </h5>
                    <div className="list">

                    {
                        orders.length===0? <div className='empty'>
                            <img src={logo} alt="" className='empty_logo'/>
                            <p>Order List is Empty!!!</p>
                        </div> : orders.map((val,idx)=>{
                            return(
                                <div className='order'>
                                    <div >
                                    <div className='user_details2'>
                                            <div className="user_details">
                                            <img src={val.pro===null?avatar:val.pro} alt="" className='pro_img'/>
                                            <p>{val.name} <br /> {val.email}</p>
                                            </div>
                                            <IconButton aria-label="delete">
                                                <SendIcon fontSize='small' />
                                            </IconButton>
                                        </div>

                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                val.cart.map((v,i)=>{
                                                    return(
                                                        <tr>
                                                            <th scope="row">{i+1}</th>
                                                            <td>{v.name}</td>
                                                            <td>{v.qnt}</td>
                                                            <td>
                                                            <IconButton aria-label="delete" onClick={()=>deleteItem(idx,v.id)}>
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                    }

                    <div className="upload" >

                    <Fab size="medium" color="secondary" aria-label="add" onClick={()=>setTog(false)}>
                        <AddIcon />
                    </Fab>
                    </div>
                    
                    </div>
        </>
    )
}

export default ResList;