/**
 * Confirmation Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import {API_URL} from '../../Utils/Urls';
import EventCardComponent from '../Events/EventCardComponent';
import axios from 'axios';
import { formatDateDayAndDate } from '../../Utils/DateFormat';
import { EventDateSorter, EventHandler } from '../../Utils/EventHandler';

const RegisteredEventListComponent = (props) => {
var isLoggedIn = true;
var userId=1;
let [registeredEventList,setRegisteredEvents] = React.useState([]);
 
// Response will be received here and state is updated.
React.useEffect(() => {
/*Given a static zip code for now*/
    try {
        let zip_code = 43206;
        const agencyUri = API_URL.EVENTS_LIST;
        const resp =
            axios.get(agencyUri, { params: { zip_code } })
                .then(response => {
                    const { data: { agencies } } = response;
                    const agencyDataSorted = EventDateSorter(EventHandler(agencies));
                    setRegisteredEvents(agencyDataSorted);
                });
    } catch (err) {
        console.error(err);
    }
  
}, []);

    return (
        <div>
            <h2 className="mb-5 font-weight-bold mobile-text-left text-center">You Are Registered For</h2>

            {registeredEventList.length === 0 && <h3>No Events Currently Scheduled</h3>}
            {Object.keys(registeredEventList).length > 0 && Object.entries(registeredEventList).map(([date, event]) => (
                <div key={date} className="row mt-5">
                    <div className="col-md-12">
                        <div className="day-view">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="day-view-title">{ formatDateDayAndDate(date) }</span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                {event.map(event => (
                                    <EventCardComponent key={event.id} event={event} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default RegisteredEventListComponent;