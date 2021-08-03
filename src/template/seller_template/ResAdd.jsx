import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import logo from '../../static/images/undraw_Upload_re_pasx.svg'
import Rocket from '../../static/images/undraw_To_the_stars_qhyy.svg'
import uuid from 'react-uuid';
import Food_store from '../buyer_temp/store/Food_store';
import Fruit_store from '../buyer_temp/store/Fruit_store';
import Fashion_store from '../buyer_temp/store/Fashion_store';
import { getElementError } from '@testing-library/react';
import Fab from '@material-ui/core/Fab';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  
  const ResAdd = ({setTog}) =>{
      const [img3, setImg3] = useState(logo);
      const [rocket, setRocket] = useState(true);
        const [newPro, setNewPro] = useState({
            name:'',
            rating:'',
            prize:'',
            title:'',
            desc:''
        })

        const inputEvent = (e) =>{
            const {value,name} = e.target;
            setNewPro((p)=>{
                return {
                    ...p,
                    [name]: value
                }
            })
            // console.log(newPro);
        }

      const classes = useStyles();
  
      const imageHandler2 = (e) => {

          const reader2 = new FileReader();
          reader2.onload = () =>{
              if(reader2.readyState === 2){
                  setImg3(reader2.result)
                  // localStorage.setItem('up_img',JSON.stringify(reader.result))
              }else if(reader2.readyState === 1){
                  return alert('no such file');
              }
          }
          reader2.readAsDataURL(e.target.files[0])

      }

      const Add_new = (e) =>{
        e.preventDefault();
        setRocket(false)
        var newObj = {
            id: uuid(),
            img: img3,
            name: newPro.name,
            rating: newPro.rating,
            prize: newPro.prize,
            qnt:'1',
            title: newPro.title,
            desc: newPro.desc
        }

        if(newPro.title==='food'){
            Food_store.push(newObj)
        }
        else if(newPro.title==='fruit'){
            Fruit_store.push(newObj);
        }
        else if(newPro.title==='fashion'){
            Fashion_store.push(newObj);
        }
        setImg3(logo)
        setNewPro(
            {
                name:'',
                rating:'',
                prize:'',
                title:'',
                desc:''
            }
        )
        
        setTimeout(() => {
            setRocket(true)
        }, 2000);


    }  
  
  
      return(
          <>
                  
                      <h5> Add New Product </h5>
                      <div className='add2' style={{
                          display:rocket?'none':'flex'
                          }}>
                        <img src={Rocket} alt=""/>
                      </div>
                      <div className='add' style={{display:rocket?'flex':'none'}}>
                      <form onSubmit={Add_new}> 
                      <img src={img3} alt=""/>
                      <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={imageHandler2}
                        />
                        <label htmlFor="contained-button-file">
                            <Button color="primary" component="span" >
                                <PhotoCamera />
                            </Button>
                        </label>
                          <div className="mb-2">
                              <input type="text" className="form-control" style={{width:'100%'}} name='name' placeholder='Enter Product Name' required onChange={inputEvent} value={newPro.name}/>
                          </div>
                          <div className="mb-2" style={{
                              display:'flex',
                              justifyContent: 'space-between',
                              // width:'100%'
                          }}>
                              <input type="number" min='1' max='5' style={{width:'30%'}} className="form-control" name='rating' placeholder='Rate' required onChange={inputEvent} value={newPro.rating}/>
                              <input type="number" min='1' style={{width:'60%'}} className="form-control" name='prize' placeholder='Prize' required onChange={inputEvent} value={newPro.prize}/>
                          </div>
                          <select className="form-select mb-2" aria-label="Default select example" name='title' id='title' required onChange={inputEvent} value={newPro.title}>
                              <option value="">Product Type</option>
                              <option value="food">Food</option>
                              <option value="fruit">Fruit or Veg</option>
                              <option value="fashion">Fashion</option>
                          </select>
                          <div className="my-2" style={{
                              display:'flex',
                              flexDirection:'column',
                              
                          
                          }}>
                                <p style={{
                                    alignSelf:'flex-start',
                                    marginBottom:'0'
                                }}>Mfg Date</p>
                              <input type="date" id="mfg" className="form-control" style={{width:'100%'}} name='Mfg'  required  placeholder='date'/>
                          </div>
                          <div className="mb-2" style={{
                              display:'flex',
                              flexDirection:'column',
                              
                          
                          }}>
                                <p style={{
                                    alignSelf:'flex-start',
                                    marginBottom:'0'
                                }}>Exp Date</p>
                              <input type="date" className="form-control" style={{width:'100%'}} name='Exp'  required  />
                          </div>
                          <div className="mb-2">
                              <textarea className="form-control" rows="3" name="desc" placeholder='Description' required onChange={inputEvent} value={newPro.desc}></textarea>
                          </div>
                          <Button type='submit' className='mb-2' variant="outlined" color="primary" style={{width:'100%'}} >
                              Add
                          </Button>
                      </form>
                      <div className="upload" >

                    <Fab size="medium" color="secondary" aria-label="add" onClick={()=>setTog(true)}>
                        <ClearRoundedIcon />
                    </Fab>
                    </div>
                      </div>
          </>
      )
  }

export default ResAdd;
  