/**
 * Event Card Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';

const EventCardComponent = (props) => {
    const {day,date} = props;

    return (
        <div className="col-lg-4 col-xl-4">
            <div className="day-view-item">
                <div className="day-view-item-header">
                    <div className="day-view-header-title">Mid-Ohio Foodbank - Kroger Community Pantry - ID - {day.id}</div>
                    <div className="day-view-item-location d-flex justify-content-between">
                        <div className="day-view-item-name">Prepack Pantry</div>
                        <div className="day-view-item-distance">14 Miles</div>
                    </div>
                </div>
                <div className="day-view-item-details">
                    <div className="registration-required">
                        <span className="registration-required-label">Registration Required</span>
                    </div>
                    <div className="timings d-flex justify-content-between">
                        <div className="date-wrapper">{date}</div>
                        <div className="timing-wrapper">01:00 PM - 03:00 PM</div>
                    </div>
                    <div className="address-wrap">
                        3960 BROOKHAM DR,
                        GROVE CITY, OH 43123
                        614-317-9482
                    </div>
                    <div className="day-view-item-detail-footer d-flex mt-3">
                        <button className="btn default-button flex-grow-1">View Details</button>
                        <button className="btn custom-button ml-1 flex-grow-1">Reserve Time</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default EventCardComponent;