/**
 * EventList Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import EventCardComponent from './Event/EventCardComponent';

const EventListComponent = () => {

    // Temporary list 
    const items = [{
        id:'1',    
    },{
        id:'2',    
    },{
        id:'3',    
    }]
    return (
            <div className="search-results-list">
                <div className="row align-items-end">
                    <div className="col-lg-4 col-xl-4">
                        <h2 className="font-weight-bold mobile-text-left">
                            Resource Events in Your Area
                        </h2>
                    </div>
                    <div className="col-lg-4 col-xl-4 d-none-xs d-none-sm">
                        <div className="switch-view d-flex justify-content-center">
                            <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" checked />
                            <label for="toggle-on" className="btn-toggle">List</label>
                            <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio" />
                            <label for="toggle-off" className="btn-toggle">Map</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4">
                        <div className="form-group">
                            <label>Sort by</label>
                            <select className="form-control">
                                <option>Recommended</option>
                            </select>
                        </div>
                    </div>
                </div>
                   <ul style={{listStyle:'none'}}>
                {items.map((val,index)=>{
                   return  <li><EventCardComponent details={val}/>
                   </li>
                })}
            </ul>
            </div>
          
     
        
    )

};

export default EventListComponent;