/**
 * EventList Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import EventCardComponent from './Event/EventCardComponent';

const EventListComponent = () => {

    // Temporary list 
    const items = [
    {
        date:'MONDAY, 4/2/2020',
        day:[{
        id:'1',    // All other card variables come here
    },{
        id:'2',    
    },{
        id:'3',    
    }]},
    {
        date:'TUESDAY, 5/2/2020',
        day:[{
        id:'1',    
    },{
        id:'2',    
    },{
        id:'3',    
    }]}]
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
                   
                {   
                    items.map((details,index)=>{
                       return <div className="row mt-5">
                        <div className="col-md-12">
                        <div className="day-view">
                            <div className="row">
                                <div className="col-md-12"><span className="day-view-title">{details.date}</span></div>
                            </div>
                            <div className="row mt-2">
                                {
                                    details.day.map((day,index)=>{
                                        return    <EventCardComponent date={details.date} day={day}/>
                                    })
                                }
                             
                            </div>
                        </div>
                        </div>
                    </div>
                         
                            
                     
                       
                })}
            
            </div>
          
     
        
    )

};

export default EventListComponent;