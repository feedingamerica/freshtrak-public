/**
 * Event Card Component
 */
import React from 'react';
import '../../../App.scss';

const EventCardComponent = (props) => {
    const {details} = props;
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <h3>{details.heading}</h3>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Prepack pantry</p>
                <p>14 miles</p>
            </div>
            <h6>Registration required</h6>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Monday 4/2//2020</p>
                <p>12:30pm-3:30pm</p>
            </div>
            <p>225 E Gates St,
                Saint Columbus, OH 43206,
                (321)456-0987
            </p>
            <div>
                <button>View Details</button>
                <button>Reserve Time</button>
            
            </div>
            
        </div>
    )

};

export default EventCardComponent;