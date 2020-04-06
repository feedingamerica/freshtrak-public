/**
 * EventList Component
 */
import React from 'react';
import '../../App.scss';
import EventCardComponent from './Event/EventCardComponent';

const EventListComponent = () => {

    // Temporary list 
    const items = [{
        heading:'ABC',    
    },{
        heading:'EFG',    
    },{
        heading:'HIJ',    
    }]
    return (
        <div>
            <label>
                Sort by
            </label>
            <select>
                <option>Recommended</option>
            </select>
            <ul>
                <li><a href="#">LIST</a></li>
                <li><a href="#">MAP</a></li>
            </ul>
            <p><strong>Monday, 4/2/2020</strong></p>
            <ul style={{display:'flex',justifyContent:'space-around'}}>
                {items.map((val,index)=>{
                   return  <li><EventCardComponent details={val}/>
                   </li>
                })}
            </ul>
        </div>
    )

};

export default EventListComponent;