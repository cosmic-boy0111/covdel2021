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

const App = () => {
  return (
    <Router>
    <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route exact path="/buyer">
            <Buyer />
          </Route>
        </Switch>
    </Router>
    // {/* <div>
    //   {/* <LoginPage /> */}
    //   <Buyer />
    // </div> */}
  )
}

export default App

