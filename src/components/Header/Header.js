import React from "react";
import { NavLink } from "react-router-dom"

const Header = (props) => {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg">
        <a href="/" className="navbar-brand text-green pl-2">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">

                <li className="nav-item px-4" activeClassName="active">
                    <NavLink to="/" className="nav-link text-green">Dashboard</NavLink>
                </li>

                <li className="nav-item px-4" activeClassName="active">
                    <NavLink to="/countries" className="nav-link text-green">Countries/Places</NavLink>
                </li>

            </ul>
        </div>
    </nav>

}



export default Header;