import React from 'react';
import mofcLogo from '../../Assets/img/MOFC-Logo.svg';

const ResourceListComponent = (props) => {
    const [foodBankArray, setFoodBankArray] = React.useState([]);

    React.useEffect(() => {
        if(props.dataToChild){
            const { dataToChild: { foodbanks } } = props;
            let foodBankArray = foodbanks.map(foodbank => {
                return {foodbank}
            });
            setFoodBankArray(foodBankArray);
        }
    },[props.dataToChild]);

    return (
        <div className="search-results">
            <div className="search-list-title">Your Local Food Banks</div>
            {foodBankArray.map((value, index) => {
                const { foodbank: { name, address, city, state, zip, phone, fb_url, fb_fano_url } } = value;
                return(
                    <div className="row align-items-center mt-2" key={index}>
                        <div className="col-lg-4 col-sm-6">
                            <div className="d-flex align-items-center">
                                <span className="search-list-logo"><img src={mofcLogo}/></span>
                                <span className="font-weight-bold ml-2">{name}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 caption-text">
                            {address} {city}, {state} {zip}
                        </div>
                        <div className="col-lg-4 col-sm-6 caption-text">
                            <div>{phone}</div>
                            <div>{fb_url}</div>
                        </div>
                    </div>
                )
            })  }
        </div>
    )
};
export default ResourceListComponent;

