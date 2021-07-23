import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    width:'200px',
  },
}));

const DropDown = ({meth1,meth2})=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const func1 = (event) => {
    if(JSON.parse(localStorage.getItem('email'))===null){
      meth1(true)
      meth2(false)
    }else{
      alert('you are already logged in');
      // <Alert severity="info">you are already logged in</Alert>
    }

    handleClose(event);
  }

  const check2 = (event) =>{
    if(JSON.parse(localStorage.getItem('email'))===null){
      alert('kindly login');
    }else{
      if(window.confirm('do you really wants to log out')===true){
        localStorage.removeItem('email');
        localStorage.removeItem('user');
      }
      // console.log(t);
    }

    handleClose(event);
  }


  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <AccountCircleIcon /> <ArrowDropDownRoundedIcon/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ 
                transformOrigin: placement === 'bottom' ? 'canter top' : 'canter bottom',
                width:'10rem',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                // marginRight:'5rem',
             }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    
                    <MenuItem onClick={func1}>
                    {
                      JSON.parse(localStorage.getItem('user'))===null? 'Sign in': <span>Sign in as <br/> <span style={{fontSize:'13px',opacity:'0.7'}}>{JSON.parse(localStorage.getItem('user'))}</span></span>
                    }
                    </MenuItem>
                    <hr className='nav_hr'/>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Your orders</MenuItem>
                    <hr className='nav_hr'/>
                    <MenuItem onClick={handleClose}>settings</MenuItem>
                    <hr className='nav_hr'/>
                    <MenuItem onClick={check2}>Sign out</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default DropDown;