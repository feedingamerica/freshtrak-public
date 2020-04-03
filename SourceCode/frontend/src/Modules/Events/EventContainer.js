import React from 'react';
import MenuComponent from '../General/MenuComponent';
import FooterComponent from '../General/FooterComponent';
import BasicInfoComponent from '../Events/BasicInfoComponent';
import TypeInfoComponent from '../Events/TypeInfoComponent';
import DateTimeInfoComponent from '../Events/DateTimeInfoComponent';
import {Jumbotron, Button, Container} from 'react-bootstrap';
import {confirm, showMessage} from '../../Utils/Util';
import {ToastContainer} from 'react-toastify';
import {STATUS_ACTIVE} from '../../Utils/Constants';
import {API_URL} from '../../Utils/Urls';
import {ajaxPost, ajaxGet, ajaxPut} from '../../Services/Http/Ajax';
import '../../App.css';

const EventContainer = (props) => {
    const basicInfoRef = React.useRef();
    const typeInfoRef = React.useRef();
    const dateTimeRef = React.useRef();

    let formError = {};
    let eventDetails = [];
    let [eventData,setEventData] = React.useState({});
    let isEditEvent = !!props.location.state;
    let eventId;

    React.useEffect(() => {
        if (isEditEvent){
            eventId = props.location.state.eventId;
            let uri = API_URL.EVENT_URL + '/' + eventId + '/edit';
            ajaxGet(uri, (response) => {
                if (response.status === STATUS_ACTIVE) {
                    setEventData(response.content);
                }
                else {
                    showMessage('error',response.message)
                }
            })
        }
    }, []);

    const handleFormValidation = (e) => {
        e.preventDefault();
        let componentErrors = [];
        componentErrors.push(basicInfoRef.current.triggerErrors(),
            typeInfoRef.current.triggerErrors());
        if( componentErrors.includes(true) || Object.keys(formError).length !== 0){
            showMessage('error', 'Kindly fix all errors and continue');
            return false;
        }

        handleSubmitConfirm();
    };

    const handleSubmitConfirm = () => {
        let title = 'Are you sure you want to proceed?';
        confirm(title, handleSubmit);
    };

    const handleSubmit = () => {
        dateTimeRef.current.triggerData();
        let eventData = {
            eventData: eventDetails.eventData,
            eventType: eventDetails.eventType,
            eventTimings: eventDetails.eventTiming,
        };

        if(eventDetails) {
            let uri;
            if(isEditEvent){
                eventId = props.location.state.eventId;
                uri = API_URL.EVENT_URL + '/' + eventId + '/update';
                ajaxPut(uri, eventData, (response) => {
                    if (response.status === STATUS_ACTIVE) {
                        showMessage('success', 'Event Updated successfully');
                        setTimeout(function(){
                                props.history.push('/events/list') },
                            3000);
                    }
                });
            }else{
                uri = API_URL.CREATE_EVENT;
                ajaxPost(uri, eventData, (response) => {
                    if (response.status === STATUS_ACTIVE) {
                        showMessage('success', 'Event created successfully');
                        setTimeout(function(){
                                props.history.push('/events/list') },
                            3000);

                    }
                });
            }

        } else {
            showMessage('error', 'Something went wrong');
        }

    };

    const buildEventData = (data) =>{
        if(Object.keys(data)[0]){
            let dataKey = Object.keys(data)[0];
            eventDetails[dataKey] = data[dataKey];
        }
    };

    const formErrors = (errors) => {
        formError = errors;
    };

    return (
        <div>
            <MenuComponent/>

            <Jumbotron>
                <Container>
                    <h1>Add Event</h1>
                </Container>
            </Jumbotron>

            <form onSubmit = {handleFormValidation}>
                <ToastContainer/>
                    <div className = "container">
                        <BasicInfoComponent onSelectedChild = {buildEventData}
                                            ref={basicInfoRef}
                                            onFormErrors = {formErrors}
                                            dataToChild = {eventData}
                                            parentStateProp = {props} />
                    </div>

                    <div className = "container">
                        <TypeInfoComponent onSelectedChild = {buildEventData}
                                           ref={typeInfoRef}
                                           onFormErrors = {formErrors}
                                           dataToChild={eventData}
                                           parentStateProp = {props} />
                    </div>

                    <div className = "container">
                        <DateTimeInfoComponent onSelectedChild = {buildEventData}
                                               ref={dateTimeRef}
                                               dataToChild={eventData}
                                               parentStateProp = {props} />
                    </div>

                <Jumbotron>
                    <Container>
                        <Button type="submit" >Submit</Button>
                    </Container>
                </Jumbotron>
            </form>

            <FooterComponent/>
        </div>
    )
};

export default EventContainer;