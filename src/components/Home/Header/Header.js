import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import TopNav from '../TopNav/TopNav';
import './Header.css';

const Header = () => {
    return (
        <div className="header__container">
            <TopNav/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;