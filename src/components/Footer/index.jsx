import React from 'react';
import Logo from '../Logo';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <Logo/>
                <p>&copy;2022</p>
            </div>
            <nav>
                <a href="">проект</a>
                <a href="">23:33</a>
                <a href="">11/05/22</a>
                <a href="">ура подвал</a>
            </nav>
            <ul>
                <li><a href="">это просто ссылка</a></li>
                <li><a href="">это просто ссылка</a></li>
                <li><a href="">это просто ссылка</a></li>
                <li><a href="">это просто ссылка</a></li>
            </ul>
            <div>
                <h4>Мы на связи</h4>
                <p>tel</p>
                <p>mail</p>
                <ul className="soc">
                    <li><a href="">еще ссылки</a></li>
                    <li><a href="">еще ссылки</a></li>
                    <li><a href="">еще ссылки</a></li>
                    <li><a href="">еще ссылки</a></li>
                    <li><a href="">еще ссылки</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;