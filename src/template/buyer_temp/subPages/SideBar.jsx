import React from 'react'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideBar = ({setWhat,dis,setDis}) => {


return(
    <div className="side_bar">
                    <div onClick={()=>{
                         setDis(true)
                         setWhat('home')

                         }}><HomeRoundedIcon />
                         
                         <span style={{display:dis?'inline':'none'}}>

                         home <KeyboardArrowRightRoundedIcon/> 
                         </span>
                         

                    </div>
                    <div onClick={()=>{setDis(true)
                    setWhat('food')}}><FastfoodRoundedIcon />
                         
                    <span style={{display:dis?'inline':'none'}}>
                         food <KeyboardArrowRightRoundedIcon/> 
                         </span> 
                              
                    </div>
                    <div onClick={()=>{setDis(true)
                    setWhat('fruit')}}><KitchenRoundedIcon/> 
                         

                         
                    <span style={{display:dis?'inline':'none'}}>
                         fruit and veg <KeyboardArrowRightRoundedIcon/>
                         </span>
                              
                    </div>
                    <div onClick={()=>{setDis(true)
                    setWhat('fashion')}}><DevicesOtherRoundedIcon />
                         

                         
                    <span style={{display:dis?'inline':'none'}}>
                         fashion <KeyboardArrowRightRoundedIcon/>
                         </span>
                              
                    </div>
                    <div onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><PersonRoundedIcon /> 

                    
                    <span style={{display:dis?'inline':'none'}}>
                    men <KeyboardArrowRightRoundedIcon/>
                    </span>
                         
                    </div>
                    <div onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><FaceRoundedIcon /> 

                    
                    <span style={{display:dis?'inline':'none'}}>
                    women <KeyboardArrowRightRoundedIcon/>
                    </span>
                         
                    </div>
                    <div onClick={()=>toast('currently no available',{type:'dark',position:'bottom-left',autoClose:2000})}><EmojiEmotionsRoundedIcon /> 
                     
                    <span style={{display:dis?'inline':'none'}}>
                     kids <KeyboardArrowRightRoundedIcon/>
                    </span>
                    </div>
            </div>
)
}

export default SideBar
