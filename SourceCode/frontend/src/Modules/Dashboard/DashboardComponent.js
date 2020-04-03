/**
 * Dash board Component
 */
import React from 'react';
import HeaderComponent from '../General/HeaderComponent';
import FooterComponent from '../General/FooterComponent';
import DataComponent from '../General/DataComponent';
import '../../App.scss';

const DashboardComponent = () => {
    return (
        <div>
            <HeaderComponent/>
            <DataComponent/>
            <FooterComponent/>
        </div>
    )

};

export default DashboardComponent;