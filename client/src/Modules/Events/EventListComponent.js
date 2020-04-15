/**
 * EventList Component
 */
import React from 'react';
import EventCardComponent from './EventCardComponent';
import { formatDateDayAndDate } from '../../Utils/DateFormat';
import '../../Assets/scss/main.scss';

const EventListComponent = props => {
  // Out of Scope
  // const onChangeHandler = (e)=>{
  //     e.preventDefault();
  // };
  const { events } = props;

  return (
    <div className="search-results-list">
      <div className="row align-items-end">
        <div className="col-lg-4 col-xl-4">
          <h2 className="font-weight-bold mobile-text-left">
            Resource Events in Your Area
          </h2>
        </div>
        {/* Out of scope */}
        {/* <div className="col-lg-4 col-xl-4 d-none-xs d-none-sm">
          <div className="switch-view d-flex justify-content-center">
            <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" checked onChange={onChangeHandler} />
            <label htmlFor="toggle-on" className="btn-toggle">List</label>
            <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio" onChange={onChangeHandler}/>
            <label htmlFor="toggle-off" className="btn-toggle">Map</label>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4">
          <div className="form-group">
            <label>Sort by</label>
            <select className="form-control">
                <option>Recommended</option>
            </select>
          </div>
        </div> */}
      </div>
      {Object.keys(events).length === 0 && <h3>No Events Currently Scheduled</h3>}
      {Object.keys(events).length > 0 && Object.entries(events).map(([date, event]) => (
        <div key={date} className="row mt-5">
          <div className="col-md-12">
            <div className="day-view">
              <div className="row">
                <div className="col-md-12">
                  <span className="day-view-title">{ formatDateDayAndDate(date) }</span>
                </div>
              </div>
              <div className="row mt-2">
                {event.map(event => (
                  <EventCardComponent key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListComponent;
