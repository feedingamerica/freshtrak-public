import React from 'react';
import FooterContainer from '../Footer/FooterContainer';
import EventHeaderComponent from './EventHeaderComponent';
import SearchComponent from '../General/SearchComponent';
import EventListComponent from './EventListComponent';
import '../../Assets/scss/main.scss';

const EventContainer = () => {

    return (
        <div>
            <EventHeaderComponent/>
            <section className="gray-bg">
                <div className="container pt-150 pb-150">
                    <SearchComponent/>
                    <EventListComponent/>
                </div>
            </section>
            <FooterContainer/>
        </div>
    )

};

export default EventContainer;
