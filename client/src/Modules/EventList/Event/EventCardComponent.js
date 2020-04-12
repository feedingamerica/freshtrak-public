/**
 * Event Card Component
 */
import React from 'react';
import '../../../Assets/scss/main.scss';

const EventCardComponent = (props) => {
    const {day,date} = props;

    return ( 
        <div className="col-lg-4 col-xl-4">
                                 <div className="day-view-item">
                                     <div className="day-view-item-header">
    <div className="day-view-header-title">Kroger Food Pantry EXPRESS - ID - {day.id}</div>
                                         <div className="day-view-item-location d-flex justify-content-between">
                                           <div className="day-view-item-name">Prepack Pantry</div>
                                           <div className="day-view-item-distance">14 Miles</div>
                                     </div>
                                  <div className="day-view-item-details">
                                           <span className="registration-required-label">Registration Required</span>
                                         </div>
                                         <div className="timings d-flex justify-content-between">
                                             <div className="date-wrapper">{date}</div>
                                            <div className="timing-wrapper">12:30pm-3:30pm</div>
                                         </div>
                                     <div className="address-wrap">
                                             225 E Gates St, 
                                             Columbus, OH 43206
                                             (321)456-0987
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