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
                return(
                    <div className="row align-items-center mt-2" key={index}>
                        <div className="col-lg-4 col-sm-6">
                            <div className="d-flex align-items-center">
                                <span className="search-list-logo"><img src={mofcLogo}/></span>
                                <span className="font-weight-bold ml-2">{value.foodbank.name}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 caption-text">{value.foodbank.address},
                            {value.foodbank.city}, {value.foodbank.state} {value.foodbank.zip}</div>
                        <div className="col-lg-4 col-sm-6 caption-text">
                            <div>(614) 274 7770</div>
                            <div>{value.foodbank.fb_url}</div>
                        </div>
                    </div>
                )
            })  }
        </div>
    )
};
export default ResourceListComponent;

