import React from 'react';
import MenuComponent from '../General/MenuComponent';
import FooterComponent from '../General/FooterComponent';
import EventListComponent from '../Events/EventListComponent';
import {Link} from 'react-router-dom';
import {RENDER_URL} from '../../Utils/Urls';
import '../../App.css';

const EventDashboardContainer = () => {
    return (
        <div>
            <MenuComponent/>
            <div className="jumbotron">
                <p>
                    <span>
                          <Link to={RENDER_URL.EVENT_CREATE_URL} className="btn btn-secondary" variant="secondary">Add Events</Link>
                        <br/>
                    </span>
                </p>

            </div>
            <EventListComponent/>
            <FooterComponent/>
        </div>
    )
};

export default EventDashboardContainer;