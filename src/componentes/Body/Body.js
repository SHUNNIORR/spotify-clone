import React from 'react'
import './Body.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import Favoritos from '../pages/Favoritos';
import Home from '../pages/Home';
export const Body = (props) => {
    return (
        <>
        <Router>
          
          <div className="body-contain">
            <Header name={props.name}
                img={props.img} >

            </Header> 
        
          <div className="pages ">
            <Switch>
              <Route exact path="/" >
                <Home 
                  songs = {props.songs}
                ></Home>
              </Route>
              <Route path="/favos" component={Favoritos} />
              
            </Switch>
          </div>
          <Footer></Footer>
          </div>
        </Router>
        
      </>
        
    )
}

export default Body
