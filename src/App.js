import React from 'react'
import './App.css'
import Buyer from './template/Buyer'
import LoginPage from './template/LoginPage'
import Fab from '@material-ui/core/Fab';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Fruit2 from './template/Fruit2';
import Fashion2 from './template/Fashion2';
import Food2 from './template/Food2';
import Cart2 from './template/Cart2';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Page404 from './template/Page404';
import Seller from './template/Seller';
import MoreInfo2 from './template/MoreInfo2';
import Login from './template/Login';
import Profile from './template/buyer_temp/subPages/Profile';
import StoreLogin from './template/seller_template/SellerLogin';


const App = () => {
  return (
    <Router>
    <Route render={({location})=>(
      <TransitionGroup>
      <CSSTransition 
        key={location.key}
        timeout={450}
        classNames='fade'
      >
        <Switch location={location}>
            <Route exact path='/' component={LoginPage} />
            <Route exact path="/buyer" component={Buyer} />
            <Route exact path="/seller" component={Seller} />
            <Route exact path="/food" component={Food2} />
            <Route exact path="/fruit" component={Fruit2} />
            <Route exact path="/fashion" component={Fashion2} />
            <Route exact path="/moreinfo/:similar/:object" component={MoreInfo2} />
            <Route exact path="/cart" component={Cart2} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/sellerlogin" component={StoreLogin} />
            <Route component={Page404}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
    )}/>
     </Router>
     
  )
}

export default App

