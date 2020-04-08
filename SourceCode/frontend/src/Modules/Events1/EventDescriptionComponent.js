/**
 * Event Description Component 
 */
import React from 'react';
const EventDescriptionComponent = (props) => {


    return (
        <div className="content-wrapper event-details">
        <div className="small-title font-weight-bold mb-2">
            Event Details
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non erat vestibulum,
            bibendum risus non, gravida felis. Vestibulum vulputate vel odio hendrerit eleifend.
            Duis ut neque iaculis, aliquam neque eget, tempor nibh.

        </p>
        <p>Foodbank can add details to an event using an open form field. Light styling optins
            available (bold, italic, line breaks, ordered lists, preset text styles)
        </p>
        <p>Photo inclusion TBD on LOE/tech reqs
        </p>
    </div>
    )

};

export default EventDescriptionComponent;