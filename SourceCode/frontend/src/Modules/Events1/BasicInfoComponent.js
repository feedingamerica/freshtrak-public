import React from 'react';
import '../../App.css';
import useForm from '../../Utils/UseForm';
import {Form, Row, Col} from 'react-bootstrap';

const BasicInfoComponent = React.forwardRef((props, ref) => {
    const [eventData, setEventData] = React.useState([]);
    const [eventName, setEventName] = React.useState('');
    const [nickName, setNickName] = React.useState('');
    const [eventNumber, setEventNumber] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    let data;
    let isEditEvent = !!props.parentStateProp.location.state;

    React.useEffect(() => {
        if(props.dataToChild && isEditEvent){
            let propData = props.dataToChild;
            setEventName(propData.event_name);
            setNickName(propData.event_nickname);
            setEventNumber(propData.event_num);
            setZipCode(propData.service_zips);
        }
    },[props.dataToChild]);

    const buildData = (e) => {
        let { name, value } = e.target;
        let setFunction = '';
        switch (name) {
            case 'event_name':
                setFunction = setEventName;
                break;
            case 'event_nickname':
                setFunction = setNickName;
                break;
            case 'event_num':
                setFunction = setEventNumber;
                break;
            case 'service_zips':
                setFunction = setZipCode;
                break;
            default:
                break;
        }

        if (setFunction !== '') {
            setFunction(value)
        }
    };

    const handleChange = () => {
        data = { eventData :{
                event_name: eventName,
                event_nickname: nickName,
                event_num: eventNumber,
                service_zips : zipCode
            }
        };
        setEventData(data);
    };

    React.useEffect(() => {
        handleChange();
    }, [eventName, nickName, eventNumber, zipCode]);

    const dataToParent = () => {
        props.onSelectedChild(eventData);
    };

    const { errors, handleErrors } =
        useForm(props, {
            'event_name' : ['required', 'min:3'],
            'event_nickname' : ['required', 'min:3']
        }, dataToParent);

    React.useImperativeHandle(ref, () => ({

        triggerErrors(){
            handleChange();
            return handleErrors(data.eventData);
        }

    }));

    return (
        <div>
            <div className="label-container">
                <Row>
                    <Col>
                        <Form.Label>Event name</Form.Label>
                        <Form.Control size="sm" onChange={buildData} id="event_name"
                               name="event_name" onBlur={handleErrors} type="text"
                                value={eventName || ''} />

                        {errors.event_name && (
                            <span className="validationError">{errors.event_name}</span>
                        )}
                    </Col>
                    <Col>
                        <Form.Label>Event Nickname</Form.Label>
                        <Form.Control size="sm" onChange={buildData} id="event_nickname"
                                name="event_nickname" value={nickName || ''} onBlur={handleErrors}  type="text"
                                  />

                        {errors.event_nickname && (
                            <span className="validationError">{errors.event_nickname}</span>
                        )}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Event Number (HandsOn ID)</Form.Label>
                        <Form.Control size="sm" onChange={buildData} id="event_num"
                                name="event_num" onBlur={handleErrors}  type="text" value={eventNumber || ''}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Zip Codes Served (not required)</Form.Label>
                        <Form.Control size="sm" onChange={buildData} id="service_zips"
                                name="service_zips" onBlur={handleErrors}  type="text" value={zipCode || ''}
                        />
                    </Col>
                </Row>

            </div>
        </div>

    )
});

export default BasicInfoComponent;