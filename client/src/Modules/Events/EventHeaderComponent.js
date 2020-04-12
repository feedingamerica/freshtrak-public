import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import HeaderBannerComponent from './HeaderBannerComponent';
import '../../Assets/scss/main.scss';

const EventHeaderComponent = () => {
    return (
        <div>
            <div>
                <header className="header">
                    <HeaderComponent/>
                    <HeaderBannerComponent/>
                </header>
            </div>
        </div>
    )

};

export default EventHeaderComponent;