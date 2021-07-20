import React,{useState} from 'react'
import Fashion from './subPages/Fashion'
import Food from './subPages/Food'
import Fruit from './subPages/Fruit'
import '../../static/css/MoreInfo.css'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import Slider from './Slider'
import Food_store from './store/Food_store'
import Fashion_store from './store/Fashion_store'
import Fruit_store from './store/Fruit_store'


// import Food from './subPages/Food'


const MoreInfo = (props) => {

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)

    const funLike = () =>{
      setShow(false)
      props.setLike((pre)=>{
        
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== props.obj.id){
            p.push(e);
          }else{
            bool = false;
          }
        });

        bool?props.toast('Added to whishList',{
              type:'success',
              position:'bottom-left',
              autoClose: 2000
            }) : props.toast('Already Added to whishList',{
              type:'error',
              position:'bottom-left',
              autoClose: 2000
            })
        
          return [...p,props.obj]
        
      })
    }
    
    const funAdd = () =>{
        setShow2(false)
      props.setCart((pre)=>{
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== props.obj.id){
            p.push(e);
          }else{
            bool = false;
            // return props.toast('Already Added in Cart',{type:'error',position:'bottom-left'})
          }
        });

        bool?props.toast('Added in Cart',{
          type:'info',position:'bottom-left',autoClose: 2000})
          :props.toast('Already Added in Cart',{
            type:'error',position:'bottom-left',autoClose: 2000})

        return [...p,props.obj]
      })
    }


    const similar = (title) =>{
        if(title==='food'){
            return (<>
            <h3>Food Products</h3>
            <div className="new_product_div"><Slider arr={Food_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>
            )
        }else if(title==='fruit'){
            return (<>
            <h3>Fruit Products</h3>
            <div className="new_product_div"><Slider arr={Fruit_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>)
        }else if(title==='fashion'){
            return ( <>
            <h3>Fashion Products</h3>
            <div className="new_product_div"><Slider arr={Fashion_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>)
        }
    }

    return (
        <>
        <div id='more_info2' className='more_info'>
            <img src={props.obj.img} alt="" className='more_img'/>
            <div className="more_info_about">
                <h3>{props.obj.name}</h3>
                {/* <p className='inf'><GradeRoundedIcon style={{color:'gold'}}/>{props.obj.rating} {props.obj.prize}</p> */}
                <p className='inf'>{props.obj.desc}</p>
                <Tooltip title="Like">
          <Button color="primary" onClick={funLike}> 
            <FavoriteRoundedIcon style={{color: show?'#3f51b5':'#f50057' }}/>
            </Button>
          </Tooltip>
            <Tooltip title="Add">

            <Button color="primary" onClick={funAdd}>
            <AddRoundedIcon style={{color:show2?'#3f51b5':'#2cbc63'}}/>
            </Button>
            </Tooltip>
            </div>
        </div>
        <div>
            {similar(props.title)}
        </div>

        </>
    )
}

export default MoreInfo

