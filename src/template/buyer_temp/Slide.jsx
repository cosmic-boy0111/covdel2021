import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import Tooltip from '@material-ui/core/Tooltip';
import EjectRoundedIcon from '@material-ui/icons/EjectRounded';
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const Slide = (props) => {

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)

    const funLike = () =>{
      setShow(false)
      props.setLike((pre)=>{
        
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== props.id){
            p.push(e);
          }else{
            bool = false;
          }
        });

        var bool2 = true;

        var c = JSON.parse(localStorage.getItem('cart'));
        c.forEach(e => {
          if(e.id===props.id){
            bool2 = false;
          }
        })

        

        bool?props.toast('Added to whishList',{
              type:'success',
              position:'bottom-left',
              autoClose: 2000
            }) : props.toast('Already Added to whishList',{
              type:'error',
              position:'bottom-left',
              autoClose: 2000
            })

        bool2? localStorage.setItem('like',JSON.stringify(
            [...p,{
              id: props.id,
              img: props.img,
              name: props.name,
              rating: props.rating,
              qnt:props.qnt,
              prize: props.prize,
              title:props.title,
              desc: props.desc
            }]
          )) : localStorage.setItem('like',JSON.stringify([...p]))
        
          return bool2?[...p,{
            id: props.id,
            img: props.img,
            name: props.name,
            rating: props.rating,
            qnt:props.qnt,
            prize: props.prize,
            title:props.title,
            desc: props.desc
          }]:[...p]
        
      })
    }
    
    const funAdd = () =>{
      setShow2(false)
      props.setCart((pre)=>{
        var bool = true;
        const p = [];
        pre.forEach(e => {
          if(e.id !== props.id){
            p.push(e);
          }else{
            bool = false;
            // return props.toast('Already Added in Cart',{type:'error',position:'bottom-left'})
          }
        });

        var t = JSON.parse(localStorage.getItem('like')).filter((e) => {
          return e.id!==props.id;
        })

        localStorage.setItem('like',JSON.stringify(t));
        props.setLike(t)


        bool?props.toast('Added in Cart',{
          type:'info',position:'bottom-left',autoClose: 2000})
          :props.toast('Already Added in Cart',{
            type:'error',position:'bottom-left',autoClose: 2000})

            localStorage.setItem('cart',JSON.stringify(
              [...p,{
                id: props.id,
                img: props.img,
                name: props.name,
                rating: props.rating,
                qnt:props.qnt,
                prize: props.prize,
                title:props.title,
                desc: props.desc
              }]
            ))

        return [...p,{
          id: props.id,
          img: props.img,
          name: props.name,
          rating: props.rating,
          qnt:props.qnt,
          prize: props.prize,
          title:props.title,
          desc: props.desc
        }]
      })
    }

    const setAll = () =>{
      props.setWhat('more')
      props.setObj({
        id: props.id,
        img: props.img,
        name: props.name,
        rating: props.rating,
        qnt:props.qnt,
        prize: props.prize,
        title:props.title,
        desc: props.desc
      })
      props.setTitle(props.title)
    }
    
    
    return (
      <>
        <div className="cards">       
      <div className="card1" >
      <Tooltip title='click for more info' placement="top">

      <img src={props.img} alt="myPic" className="card__img" onClick={()=>setAll()}/>
      </Tooltip>
        <div className="card__info" >
          <span className="card__category">{props.name}</span>
          <h5 className="card__title"><GradeRoundedIcon style={{color:'gold'}}/>{props.rating} ${props.prize}</h5>
          <Tooltip title="Like">
          <Button color="primary" onClick={funLike}> 
            <FavoriteBorderRoundedIcon style={{color: show?'#3f51b5':'#f48fb1' }}/>
            </Button>
          </Tooltip>
            <Tooltip title="Add">

            <Button color="primary" onClick={funAdd}>
            <AddRoundedIcon style={{color: show2?'#3f51b5':'#2cbc63' }}/>
            </Button>
            </Tooltip>
        </div>
        
      </div>
      
      
    </div>
      {/* <props.toastContainer /> */}
      </>
    )
}

export default Slide