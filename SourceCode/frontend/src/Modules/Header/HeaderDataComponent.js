/**
 * Created by Basil on 04-04-20
 */

import React from 'react';
import {Nav} from 'react-bootstrap';
import '../../App.scss';
const HeaderDataComponent = () => {
    return (
        <div>
            <div className ="data-text">
                <span><h6>Find food resources in <br/>your neighborhood.</h6></span>
                <span>We’re here to help! Input your address to find food access
					resources in your neighborhood.
				</span>
            </div>
        </div>
    )
};
export default HeaderDataComponent;