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


const SideBar = () => {


return(
    <div className="side_bar">
                     <div><HomeRoundedIcon />
                         
                         

                         home <KeyboardArrowRightRoundedIcon/> 
                         
                         

                    </div> 
                    
                     <div ><FastfoodRoundedIcon />
                         
                    
                         food <KeyboardArrowRightRoundedIcon/> 
                          
                              
                    </div> 
                    <div ><KitchenRoundedIcon/> 
                         

                         
                    
                         fruit and veg <KeyboardArrowRightRoundedIcon/>
                         
                              
                    </div>
                    <div ><DevicesOtherRoundedIcon />
                         

                         
                    
                         fashion <KeyboardArrowRightRoundedIcon/>
                         
                              
                    </div>
                    
                    <div onClick={()=>toast('currently not available',{type:'dark',position:'bottom-left',autoClose:2000})}><PersonRoundedIcon /> 

                    
                    
                    men <KeyboardArrowRightRoundedIcon/>
                    
                         
                    </div>
                    <div onClick={()=>toast('currently not available',{type:'dark',position:'bottom-left',autoClose:2000})}><FaceRoundedIcon /> 

                    
                    
                    women <KeyboardArrowRightRoundedIcon/>
                    
                         
                    </div>
                    <div onClick={()=>toast('currently not available',{type:'dark',position:'bottom-left',autoClose:2000})}><EmojiEmotionsRoundedIcon /> 
                     
                    
                     kids <KeyboardArrowRightRoundedIcon/>
                    
                    </div>
            </div>
          )
}

export default SideBar
