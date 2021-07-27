import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Drawer = ({setWhat,toast}) => {


    const Icon = [<HomeRoundedIcon/>,<FastfoodRoundedIcon/>,<KitchenRoundedIcon/>,<FastfoodRoundedIcon/>,<PersonRoundedIcon/>,<FaceRoundedIcon/>,<EmojiEmotionsRoundedIcon/>]
    const Go = ['home','food','fruit','fashion']

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toShow = (index) => {
    if(index>=Go.length){
        toast('currently not available',{type:'dark',position:'bottom-left',autoClose:2000})
    }else{
      setWhat(Go[index])
    }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Food', 'Fruit and Veg', 'Fashion','Men','Women','Kids'].map((text, index) => (
          <ListItem button key={text} onClick={()=>toShow(index)} className='res_item'>
            <ListItemIcon>{Icon[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuRoundedIcon /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Drawer;