import React from 'react';
import logo from './tutorials-website-logo.png';
import './Style.css';

function Header(){
    return (<div>
<img src={logo} alt="logo"/>
<h2 className="title">Tutorialswebsite</h2>
    </div>);
}

export default Header;