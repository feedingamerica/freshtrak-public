import React from 'react';

const ResourceListComponent = () => {

    return (
        <div className="search-results">
            <div className="search-list-title">Your Local Food Banks</div>
            <div className="row align-items-center mt-2">
                <div className="col-lg-4 col-sm-6">
                    <div className="d-flex align-items-center">
                        <span className="search-list-logo"><img src="img/MOFC-Logo.svg"/></span>
                        <span className="font-weight-bold ml-2">Mid-Ohio Foodbank</span>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 caption-text">225 E Gates St, Columbus, OH 43206</div>
                <div className="col-lg-4 col-sm-6 caption-text">
                    <div>(614) 274 7770</div>
                    <div> www.midohiofoodbank.org</div>
                </div>
            </div>
            <div className="row align-items-center mt-2">
                <div className="col-lg-4 col-sm-6">
                    <div className="d-flex align-items-center">
                        <span className="search-list-logo"><img src="img/MOFC-Logo.svg"/></span>
                        <span className="font-weight-bold ml-2">Mid-Ohio Foodbank</span>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 caption-text">225 E Gates St, Columbus, OH 43206</div>
                <div className="col-lg-4 col-sm-6 caption-text">
                    <div>(614) 274 7770</div>
                    <div> www.midohiofoodbank.org</div>
                </div>
            </div>
        </div>
    )
};
export default ResourceListComponent;

