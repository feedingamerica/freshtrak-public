/**
 * Confirmation Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import ButtonComponent from '../General/ButtonComponent';
import EventCardComponent from '../Events/EventCardComponent';
import EventListComponent from '../Events/EventListComponent';


const RegisteredEventListComponent = (props) => {
var isLoggedIn = true;
 // Temporary list
 const items = [
    {
        // date:'MONDAY, 4/2/2020',
        day:[{
            id:'1',    // All other card variables come here
        },{
            id:'2',
        },,{
            id:'3',
        }]}];
    return (
        <div>
            <h2 className="mb-5 font-weight-bold mobile-text-left text-center">You Are Registered For</h2>

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

export default RegisteredEventListComponent;