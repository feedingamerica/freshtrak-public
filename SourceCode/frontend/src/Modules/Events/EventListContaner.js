import React, {Component} from 'react';
import * as constants from '../../Utils/Constants'
import {ajaxGet, ajaxDestroy} from '../../Services/Http/Ajax';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import MenuComponent from '../General/MenuComponent';
import FooterComponent from '../General/FooterComponent';
import {API_URL} from "../../Utils/Urls";
import {showMessage, confirm} from '../../Utils/Util';
import {STATUS_ACTIVE}  from '../../Utils/Constants';
import {ToastContainer} from 'react-toastify';

const EventListContainer = () => {
    const [eventArray, setEventArray] = React.useState([]);
    const [isDelete, setIsDelete] = React.useState(false);
    let urlPrefix = '/events/';

    React.useEffect(() => {
        let eventData;
        let uri = API_URL.GET_EVENT_LIST;
        ajaxGet(uri, (response) => {
            if (response.status === constants.STATUS_ACTIVE) {
                eventData = response.content;
                let eventArray = eventData.map(event => {
                    return {event}
                });
                setEventArray(eventArray);
            }
        });
    }, [isDelete]);

    const confirmDelete = (e) => {
        e.preventDefault();
        let title = 'Are you sure you want to delete this event?';
        let eventId = e.target.value;
        confirm(title, deleteEvent, eventId);
    };

    const deleteEvent = (confirm, eventId) => {
        let uri = API_URL.EVENT_URL + '/' + eventId + '/delete';
        ajaxDestroy(uri, (response) => {
            if (response.status === STATUS_ACTIVE) {
                setIsDelete(!isDelete);
                showMessage('success', response.message)
            }
            else {
                showMessage('error', response.message)
            }
        })
    };

    return (
        <div>
            <ToastContainer/>
            <MenuComponent/>
            <Card>
                <Card.Header>Events List</Card.Header>
                <Card.Body>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Slno</th>
                            <th>Event Name</th>
                            <th>Event Number</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {eventArray.map((value, index) => {
                            let url = urlPrefix + value.event.id + '/edit';
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{value.event.event_name}</td>
                                    <td>{value.event.event_num}</td>
                                    <td>{value.event.start_time}</td>
                                    <td>{value.event.end_time}</td>
                                    <td>
                                        <Link to={{
                                            pathname: url,
                                            state: {
                                                eventId: value.event.id
                                            }
                                        }}>Edit</Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm m-0" value={value.event.id} onClick={confirmDelete}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })  }
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
            <FooterComponent/>
        </div>

    )
};
export default EventListContainer;