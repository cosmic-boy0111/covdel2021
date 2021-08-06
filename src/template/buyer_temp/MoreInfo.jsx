import React,{useState,useEffect} from 'react'
import Fashion from './subPages/Fashion'
import Food from './subPages/Food'
import Fruit from './subPages/Fruit'
import '../../static/css/buyer_css/MoreInfo.css'
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
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

// import Food from './subPages/Food'


const MoreInfo = (props) => {

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)
    const [op,setOp] = useState(true)
    const [obj, setObj] = useState('')

    useEffect(() => {
      if(props.title==='food'){
        Food_store.forEach(e =>{
            if(e.id===props.obj){
              setObj(e);
            }
          })
      }else if(props.title === 'fruit'){
          Fruit_store.forEach(e =>{
            if(e.id===props.obj){
              setObj(e);
            }
          })
      }else if(props.title === 'fashion'){
          Fashion_store.forEach(e =>{
            if(e.id===props.obj){
              setObj(e);
            }
          })
      }
    }, [])

    const funLike = () =>{
      setShow(false)
      props.setLike((pre)=>{
        
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== obj.id){
            p.push(e);
          }else{
            bool = false;
          }
        });

        var bool2 = true;

        var c = JSON.parse(localStorage.getItem('cart'))===null?[]:JSON.parse(localStorage.getItem('cart'));

          c.forEach(e => {
            if(e.id===obj.id){
              bool2 = false;
            }
          })
        

        bool && bool2 ?props.toast('Added to whishList',{
              type:'success',
              position:'bottom-left',
              autoClose: 2000
            }) : props.toast('Already Added to whishList',{
              type:'error',
              position:'bottom-left',
              autoClose: 2000
            })
            
        bool2 ? localStorage.setItem('like',JSON.stringify([...p,obj])): localStorage.setItem('like',JSON.stringify([...p]))
        
          return bool2 ?[...p,obj]:[...p]
        
      })
      setTimeout(() => {
        setShow(true)
      }, 1000);
    }
    
    const funAdd = () =>{
        setShow2(false)
      props.setCart((pre)=>{
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== obj.id){
            p.push(e);
          }else{
            bool = false;
          }
        });

        var t = JSON.parse(localStorage.getItem('like'))===null?[]:JSON.parse(localStorage.getItem('like'))

          t.filter((e) => {
            return e.id!==obj.id;
          })
        

        localStorage.setItem('like',JSON.stringify(t));

        props.setLike(t)

        bool?props.toast('Added in Cart',{
          type:'info',position:'bottom-left',autoClose: 2000})
          :props.toast('Already Added in Cart',{
            type:'error',position:'bottom-left',autoClose: 2000})

        localStorage.setItem('cart',JSON.stringify([...p,obj]))

        return [...p,obj]

      })
      setTimeout(() => {
        setShow2(true)
      }, 1000);
    }

    

    const similar = (title) =>{
      if(title==='food'){
          
            return (<>
            <h3>Food Products</h3>
            <div className="new_product_div"><Slider arr={Food_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setBack={props.setBack} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>
            )
        }else if(title==='fruit'){
            
            return (<>
            <h3>Fruit Products</h3>
            <div className="new_product_div"><Slider arr={Fruit_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setBack={props.setBack} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>)
        }else if(title==='fashion'){
            
            return ( <>
            <h3>Fashion Products</h3>
            <div className="new_product_div"><Slider arr={Fashion_store} setLike={props.setLike} setCart={props.setCart} toast={props.toast} setWhat={props.setWhat} setBack={props.setBack} setObj={props.setObj} setTitle={props.setTitle}/></div>
            </>)
        }
    }

    return (
        <>
        <div id='more_info2' className='more_info'>
            <img src={obj.img} alt="" className='more_img' onMouseOver={()=>setOp(false)} onMouseOut={()=>setOp(true)}/>
            <div className="more_info_about">
                <h3>{obj.name}</h3>
                {/* <p className='inf'><GradeRoundedIcon style={{color:'gold'}}/>{props.obj.rating} {props.obj.prize}</p> */}
                <p className='inf'>{obj.desc}</p>
                <div>

                <Tooltip title="Like">
          <Button color="primary" onClick={funLike}> 
            <FavoriteBorderRoundedIcon style={{color: show?'#3f51b5':'#f48fb1' }}/>
            </Button>
          </Tooltip>
            <Tooltip title="Add">
            <Button color="primary" onClick={funAdd}>
            <AddRoundedIcon style={{color:show2?'#3f51b5':'#2cbc63'}}/>
            </Button>
            </Tooltip>
                </div>
            </div>
        </div>
        <div style={{opacity:op?'1':'0.5'}}>
            {similar(props.title)}
        </div>
        </>
    )
}

export default MoreInfo

