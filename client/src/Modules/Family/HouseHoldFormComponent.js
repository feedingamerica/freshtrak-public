import React from 'react';
import useForm from '../../Utils/UseForm';

const HouseHoldFormComponent= React.forwardRef((props, ref)=> {

    const [streetAddress, setStreetAddress] = React.useState('');
    const [aptNo, setAptNo] = React.useState('');
    const [zip, setZip] = React.useState('');
    let street_address_form , apt_number_form='';
    const [childFamilyData, setChildFamilyData] = React.useState([]);
    let data='';

    const buildAddressForm = (event) => {
        event.preventDefault();
        let name = event.target.name;
        switch (name) {
            case 'street_address':
                setStreetAddress(event.target.value);
                break;
            case 'apt_no':
                setAptNo(event.target.value);
                break;
                case 'zip_code':
                    setZip(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleChange = () => {
        data = {
            addressData: {
                streetAddress: streetAddress,
                aptNo: aptNo,
                zipcode: zip,
            }
        };

        props.onSelectedChild(data);
    };

    React.useEffect(() => {
        handleChange();
    }, [streetAddress, aptNo,zip]);

    let formDataBuildOne = props.famData ? ((street_address_form=props.famData.address))? props.famData : '' :'';
    let formDataBuildtwo = props.famData ? ((apt_number_form=props.famData.apt_number))? props.famData : '' :'';

    React.useEffect(() => {
        if (street_address_form) {
            setStreetAddress(street_address_form);
            setAptNo(apt_number_form);
        }
    }, [street_address_form]);


    const dataToParent = () => {
        props.onSelectedChild(childFamilyData);
    };

    const { errors, handleErrors } =
        useForm(props, {
            'street_address' : ['required', 'min:5', 'max:20'],
            'apt_no' : ['required'],
            'zip_code' : ['required', 'min:5', 'max:5','number'],
        }, dataToParent);

    React.useImperativeHandle(ref, () => ({

        triggerErrors(){
            handleChange();
            return handleErrors(data.addressData);
        }

    }));


    return (

        <div>
            <div className="form-title">
                        Household Information
            </div>
            <div className="form-group">
                <label>Housing Type</label>
                <select className="form-control" name="housing_type" id="housing_type" >
                    <option>Apartment</option>
                </select>
            </div>

            <div className="form-group">
                   <label>Street Address</label>
                <input type="text" className="form-control" onChange={buildAddressForm} name="street_address" id="street_address"
                       onBlur={handleErrors}/>
            </div>

            <div className="d-flex">
                <div className="form-group">
                    <label>Unit or Apt.</label>
                    <input type="text" className="form-control" onChange={buildAddressForm} name="apt_no" id="apt_no"  onBlur={handleErrors}/>
                </div>
                <div className="form-group ml-2">
                    <label>ZIP Code</label>
                    <input type="text" className="form-control"  onChange={buildAddressForm} name="zip_code" id="zip_code"  onBlur={handleErrors}/>
                </div>
            </div>


        </div>
    )
});

export default HouseHoldFormComponent;
