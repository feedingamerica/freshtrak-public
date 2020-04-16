/**
 * Used for Main Headings
 */
import React from 'react';
const MainHeadingComponent = (props) => {
    // console.log(props) 
    return (
        <div className="title-wrap">
            <h1 className="big-title mt-5 mb-5 mobile-mb">
               {props.text}
            </h1>
        </div>
    )
};

export default MainHeadingComponent;