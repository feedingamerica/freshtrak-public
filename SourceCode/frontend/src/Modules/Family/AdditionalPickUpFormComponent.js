import React from 'react';
import useForm from '../../Utils/UseForm';
import add from '../../Assets/img/add.svg';


const AdditionalPickUpFormComponent= React.forwardRef((props, ref)=> {


    const [pickupInfo, setpickupInfo] = React.useState('');
    const [pickupName, setpickupName] = React.useState('');
    const [pickupNumberPlate, setpickupNumberPlate] = React.useState('');
    let data='';

    const buildAddressForm = (event) => {
        event.preventDefault();
        let name = event.target.name;
        switch (name) {
            case 'pickup_info':
                setpickupInfo(event.target.value);
                break;

                case 'vehicle_number_plate':
                    setpickupNumberPlate(event.target.value);
                break;

                case 'pickup_name':
                    setpickupName(event.target.value);
                break;
        }
    };

    const handleChange = () => {
        data = {
            pickupData: {
                pickupInfo: pickupInfo,
                pickupName: pickupName,
                pickupNumberPlate: pickupNumberPlate,
            }
        };

        props.onSelectedChild(data);
    };

    React.useEffect(() => {
        handleChange();
    }, [pickupInfo,pickupName,pickupNumberPlate]);


    return (

        <div className="form-fields pt-50">
            <div className="form-title">
                Additional Pickup Information (Optional)
            </div>
            <div className="form-group">
                <label>Who’s Picking up?</label>
                <select  className="form-control" onChange={buildAddressForm} name="pickup_type" id="pickup_type">
                    <option>Me</option>
                    <option>Some one Else</option>
                </select>
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={buildAddressForm} name="pickup_name" id="pickup_name"/>
            </div>
            <div className="form-group">
                <label>Vehicle License Plate Number</label>
                <input type="text" className="form-control" onChange={buildAddressForm} name="vehicle_number_plate" id="vehicle_number_plate" />
            </div>
            <div className="add-new-vehicle">
                <span className="add-button"><img src={add} className="img-fluid"/></span>
                <span>Add a Vechicle </span>
            </div>
            <div className="form-text">
                Where possible, when you arrive we’ll look for your vehicle and bring your goods to you. See event details for more info.
            </div>
        </div>

    )
});

export default AdditionalPickUpFormComponent;
