/**
 * Agency Details Component
 */
import React from 'react';
import '../../App.scss';

const AgencyDetailsComponent = (props) => {


    return (
        <div>
        <div className="medium-title font-weight-bold">
        Kroger Food Pantry EXPRESS
    </div>
    <div className="d-flex">
        <div className="pantry-name flex-grow-1">Prepack Pantry</div>
        <div className="distance">14 miles</div>
    </div>
    </div>
    )

};

export default AgencyDetailsComponent;