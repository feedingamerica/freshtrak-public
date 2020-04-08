/**
 * Created by Basil on 04-04-20
 */

import React from 'react';
import '../../Assets/scss/main.scss';
const HeaderDataComponent = () => {
    return (
        <div className="container h-100">
            <div className="header-content h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="banner-content">
                    <h1 className="text-center">
                        Find food resources in
                        your neighborhood.
                    </h1>
                    <p className="text-center">
                    We’re here to help! Input your address to find food access resources in your
                    neighborhood.
                    </p>
                </div>
            </div>
        </div>
    )
};
export default HeaderDataComponent;