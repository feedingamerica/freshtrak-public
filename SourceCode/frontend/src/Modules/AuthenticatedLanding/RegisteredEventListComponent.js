/**
 * Confirmation Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import {API_URL} from '../../Utils/Urls';
import EventCardComponent from '../Events/EventCardComponent';
import {ajaxPost, ajaxGet, ajaxPut} from '../../Services/Http/Ajax';
import {confirm, showMessage} from '../../Utils/Util';
import {ToastContainer} from 'react-toastify';
import {STATUS_ACTIVE} from '../../Utils/Constants';

const RegisteredEventListComponent = (props) => {
var isLoggedIn = true;
var userId=1;
let [registeredEventList,setRegisteredEvents] = React.useState([]);
 
// Response will be received here and state is updated.
React.useEffect(() => {
        // Temporary list || 
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
            // --------------------------------------
        setRegisteredEvents(items);
        // let eventId = props.location.state.eventId;
        let uri = API_URL.GET_REG_EVENT + `/${userId}`;
        /*ajaxGet(uri, (response) => {
            if (response.status === STATUS_ACTIVE) {               
                setRegisteredEvents(response.content);
            }
            else {
                console.log("Hello")
                showMessage('error',response.message)
            }
        }) */

  
}, []);

    return (
        <div>
            <h2 className="mb-5 font-weight-bold mobile-text-left text-center">You Are Registered For</h2>

            {
                registeredEventList.map((details,index)=>{
                    return <div key={index} className="row mt-5">
                        <div className="col-md-12">
                            <div className="day-view">
                                <div className="row">
                                    <div className="col-md-12"><span className="day-view-title">{details.date}</span></div>
                                </div>
                                <div className="row mt-2">
                                    {
                                        details.day.map((day,index)=>{
                                            return    <EventCardComponent key={index} date={details.date} day={day}/>
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