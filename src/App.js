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
            <Route exact path='/'>
              <LoginPage />
            </Route>
            <Route exact path="/buyer">
              <Buyer />
            </Route>
            <Route exact path="/seller">
              <Seller />
            </Route>
            {/* <Route exact path="/food">
              <Food2 />
            </Route>
            <Route exact path="/fruit">
              <Fruit2 />
            </Route>
            <Route exact path="/fashion">
              <Fashion2 />
            </Route>
            <Route exact path="/cart">
              <Cart2 />
            </Route> */}
            <Route component={Page404}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
    )}/>
     </Router>
     
  )
}

export default App

