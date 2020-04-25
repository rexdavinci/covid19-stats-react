import React from "react";


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
                    <a href="/" className="nav-link text-green">Dashboard</a>
                </li>

                <li className="nav-item px-4" activeClassName="active">
                    <a href="/countries" className="nav-link text-green">Countries/Places</a>
                </li>

            </ul>
        </div>
    </nav>

}



export default Header;