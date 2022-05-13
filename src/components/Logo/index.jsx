import  React from'react';
import logo from './img/logo.svg';

const Logo = () => {
    return (
        <a href="/" className="Logo">
            <img alt="new" src={logo}
            className="logo__pic"/>
        </a>
        
    )
}
export default Logo;
