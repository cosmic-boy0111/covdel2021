import React,{useState} from 'react'
import '../static/css/seller_css/seller.css';
import Add from './seller_template/Add';
import Header from './seller_template/Header';
import List from './seller_template/List';
import Button from '@material-ui/core/Button';
import ResAdd from './seller_template/ResAdd';
import ResList from './seller_template/ResList';





const Seller = () => {

    const [tog, setTog] = useState(true)

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
        <div className='seller'  >
            <Header details={store_details} setShow={setShow}/>
            <div className='seller_body'>
            <div className='add_new_product'>

                <Add />
            </div>
            <div className="list_of_orders" >

                <List />
            </div>
            <div className='res'>

            <div className='add_new_product2' style={{display:tog?'none':'block'}}>
                <ResAdd setTog={setTog}/>
            </div>
            <div className="list_of_orders2" style={{display:tog?'block':'none'}}>
                <ResList setTog={setTog}/>
            </div>
            </div>
            </div>
        </div>
                
        </>
    )
}

export default Seller
