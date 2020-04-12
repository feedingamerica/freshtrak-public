/**
 * Your Information Component
 */
import React from 'react';
import '../../App.scss';

const YourInformationComponent = (props) => {


    return (
        <div>
        <div className="small-title font-weight-bold">Your Information</div>
        <div className="mt-2 address-details mb-2">
            <span className="text-uppercase">Head of Household</span>
            <div>Savannah Neeley</div>
            <div>5190 Preferred Place</div>
            <div>Unit 304</div>
            <div>Hilliard Ohio</div>
            <div>43026</div>
        </div>
        </div>
    )

};

export default YourInformationComponent;