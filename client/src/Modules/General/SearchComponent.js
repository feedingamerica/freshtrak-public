import React from 'react';
import ButtonComponent from '../General/ButtonComponent';
import useForm from '../../Utils/UseForm';


const SearchComponent = (props, ref) => {
    const [searchData, setSearchData] = React.useState([]);
    const [street, setStreet] = React.useState('');
    const [zip, setZip] = React.useState('');
    let data;

    React.useEffect(() => {
        if(props.dataToChild){
            let propData = props.dataToChild;
            setStreet(propData.street);
            setZip(propData.zip_code);
        }
    },[props.dataToChild]);

    const buildData = (e) => {
        let { name, value } = e.target;
        let setFunction = '';
        switch (name) {
            case 'street':
                setFunction = setStreet;
                break;
            case 'zip':
                setFunction = setZip;
                break;
            default:
                break;
        }

        if (setFunction !== '') {
            setFunction(value);
        }
    };

    React.useEffect(() => {
        handleChange();
    }, [street, zip]);

    const handleChange = () => {
        data = { searchData :{
            street: street,
            zip: zip
        }
        };
        setSearchData(data);
    };

    const dataToParent = () => {
        props.onSelectedChild(searchData);
    };

    const { errors, handleErrors } =
        useForm(props, {
            'zip' : ['required', 'min:3']
        }, dataToParent, true);

    const handleFormValidation = (e) => {
        e.preventDefault();
        handleChange();
        let componentErrors = [];
        componentErrors.push(handleErrors(data.searchData));
        if( componentErrors.includes(true) || Object.keys(errors).length !== 0){
            return false;
        }
    };

    return (
        <form>
            <div className=" row align-items-end">
                <div className="col-sm-6 col-md-6 col-lg-7 col-xl-8">
                    <div className="d-flex">
                        {/* <div className="form-group flex-grow-1">
                            <label>Street</label>
                            <input type="text" className="form-control" name="street"
                                   value={street || ''}
                                   onChange={buildData} />
                        </div> */}
                        <div className="form-group zip-code">
                            <label htmlFor="zip">Zip</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                name="zip"
                                value={zip || ''}
                                onChange={buildData}
                            />

                            {errors.zip && (
                                <span className="validationError">{errors.zip}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4 text-right">
                    <ButtonComponent type ='submit' name="searchForResources" dataid= ''
                                     id="search-resource" value="Search For Resources"
                                     className = 'btn custom-button search-button'
                                     onClickfunction={handleFormValidation} />
                </div>
            </div>
        </form>
    )
};
export default SearchComponent;

