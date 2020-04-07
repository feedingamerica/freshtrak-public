import React from 'react';
import '../../App.css';
import {Form, Col} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

const DateTimeInfoComponent = React.forwardRef((props, ref) => {
    const [eventData, setEventData] = React.useState([]);
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [sourceId, setSourceId] = React.useState('');
    let data;
    let isEditEvent = !!props.parentStateProp.location.state;

    const buildData = (e) => {
        let { name, value } = e.target;
        let setFunction = '';
        switch (name) {
            // case 'start_time':
            //     setFunction = setStartTime;
            //     break;
            // case 'end_time':
            //     setFunction = setEndTime;
            //     break;
            case 'source_id':
                setFunction = setSourceId;
                break;
            default:
                break;
        }

        if (setFunction !== '') {
            setFunction(value)
        }
    };

    React.useEffect(() => {
        if(props.dataToChild && isEditEvent){
            let propData = props.dataToChild;
            setSourceId(propData.source_id);
            setEndTime(propData.end_time);
            setStartTime(propData.start_time);
        }
    },[props.dataToChild]);

    React.useEffect(() => {
        handleChange();
    }, [/*startTime, endTime,*/ sourceId]);

    const handleChange = () => {
        data = { eventTiming :{
            // start_time: startTime,
            // end_time: endTime,
            source_id: sourceId,
        }
        };
        setEventData(data);
    };

    const dataToParent = () => {
        props.onSelectedChild(eventData);
    };

    React.useImperativeHandle(ref, () => ({

        triggerData(){
            dataToParent();
        }

    }));

    return (
        <div>
            <div className="label-container">

                <Form.Row>
                    <Col>
                        <Form.Label>Start Time</Form.Label>
                        <TimePicker  size="sm" onBlur={dataToParent}
                                     onChange={buildData} start="06:00" end="23:00" step={30} />
                    </Col>
                    <Col>
                        <Form.Label>End Time</Form.Label>
                        <TimePicker  size="sm" onBlur={dataToParent}
                                     onChange={buildData}  start="06:00" end="23:00"  step={30}/>
                    </Col>
                    <Col>
                        <Form.Label>Source ID (MOF only 211 service)</Form.Label>
                        <Form.Control size="sm" as="select" onChange={buildData} id="source_id" name="source_id"
                                      onBlur={dataToParent} title="Other foodbanks can ignore this field" value={sourceId || 0}>
                            <option value="0">Not a HandsOn Event #</option>
                            <option value="4">HandsOn Event</option>
                        </Form.Control>
                    </Col>
                </Form.Row>

            </div>
        </div>
    )
});

export default DateTimeInfoComponent;