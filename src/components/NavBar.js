import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends React.Component {
    render(){
        return(
            <nav className="Nav">
        <NavLink className="Navlink" exact activeClassName="active" activeStyle={{fontWeight: "bold",color: "red"}} to="/">About</NavLink>
        <NavLink className="Navlink" exact activeClassName="active" activeStyle={{fontWeight: "bold",color: "red"}} to="/songs">Songs</NavLink>
            </nav>
        )
    }
}