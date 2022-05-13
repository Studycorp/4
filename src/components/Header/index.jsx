import React from 'react';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {
    return(
        <header>
                <Logo/>
                <Search text={searchText} foo={changeText}/>
               <nav>
               <li><a href=""> Всем привет </a></li>
         </nav>
               
        </header>
    )
}
export default Header;
