import React from 'react';
import '../../App.css';
import {ajaxGet} from '../../Services/Http/Ajax';
import {STATUS_ACTIVE} from '../../Utils/Constants';
import {API_URL} from '../../Utils/Urls';
import {Form, Col} from 'react-bootstrap';
import useForm from '../../Utils/UseForm';

const TypeInfoComponent = React.forwardRef((props, ref) => {
    const [eventData, setEventData] = React.useState([]);
    const [formValue, setFormValue] = React.useState([]);
    const [typeValue, setTypeValue] = React.useState([]);
    const [eventType, setEventType] = React.useState('');
    const [serviceType, setServiceType] = React.useState('');
    const [agencyForm, setAgencyForm] = React.useState('');
    let data;
    let isEditEvent = !!props.parentStateProp.location.state;

    React.useEffect(() => {
        let formUri = API_URL.GET_AGENCY_FORMS;
        ajaxGet(formUri, (response) => {
            if (response.status === STATUS_ACTIVE) {
                setFormValue(response.content);
            }
        });

        let typeUri = API_URL.GET_SERVICE_TYPES;
        ajaxGet(typeUri, (response) => {
            if (response.status === STATUS_ACTIVE) {
                setTypeValue(response.content);
            }
        });
    }, []);

    React.useEffect(() => {
        if(props.dataToChild && isEditEvent){
            let propData = props.dataToChild;
            setEventType(propData.event_type_id);
            setServiceType(propData.service_id);
            setAgencyForm(propData.agency_form_id);
        }
    },[props.dataToChild]);

    React.useEffect(() => {
        handleChange();
    }, [eventType, serviceType, agencyForm]);

    const buildData = (e) => {
        let { name, value } = e.target;
        let setFunction = '';
        switch (name) {
            case 'event_type_id':
                setFunction = setEventType;
                break;
            case 'service_id':
                setFunction = setServiceType;
                break;
            case 'agency_form_id':
                setFunction = setAgencyForm;
                break;
            default:
                break;
        }

        if (setFunction !== '') {
            setFunction(value)
        }
    };

    const handleChange = () => {
        data = { eventType :{
            event_type_id: eventType,
            service_id: serviceType,
            agency_form_id: agencyForm,
        }
        };
        setEventData(data);
    };

    const dataToParent = () => {
        props.onSelectedChild(eventData);
    };

    const { errors, handleErrors } =
        useForm(props, {
            'service_id' : ['required'],
        }, dataToParent);

    React.useImperativeHandle(ref, () => ({

        triggerErrors(){
            handleChange();
            return handleErrors(data.eventType);
        }


    }));

    return (
        <div>
            <div className="label-container">

                <Form.Row>
                    <Col>
                        <Form.Label>Event Type</Form.Label>
                        <Form.Control size="sm" as="select" onChange={buildData} id="event_type_id"
                                      name="event_type_id" onBlur={dataToParent} value={eventType || 0}>
                            <option value={0}>Not Defined</option>
                            <option value={1}>Food Pantry</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Default Service Type</Form.Label>
                        <Form.Control size="sm" as="select" onChange={buildData} id="service_id"
                                      name="service_id" onBlur={handleErrors} value={serviceType || ''} >
                            <option className="dropdown-item" value="">Select Options</option>
                            {typeValue.map( (value, index) => {
                                return <option className="dropdown-item" value={value.id} key={index}>{value.service_desc}</option>
                            })  }
                        </Form.Control>
                        {errors.service_id && (
                            <span className="validationError">{errors.service_id}</span>
                        )}
                    </Col>
                    <Col>
                        <Form.Label>Agency Form</Form.Label>
                        <Form.Control size="sm" as="select" onChange={buildData} id="agency_form_id"
                                      name="agency_form_id" onBlur={dataToParent} value={agencyForm || ''} >
                            <option className="dropdown-item" value="">Select Options</option>
                            {formValue.map( (value, index) => {
                                return <option className="dropdown-item" value={value.id} key={index}>{value.form_num}</option>
                            })  }
                        </Form.Control>
                    </Col>
                </Form.Row>

            </div>
        </div>

    )
});

export default TypeInfoComponent;