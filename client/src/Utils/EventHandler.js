import moment from 'moment';

export const EventHandler = agencies => EventDateSorterByDate(EventObjectBuilder(AgencyHandler(agencies)));

export const EventDateSorterByDate = eventObj => {
  const eventOrderByDate = {};
  Object.keys(eventObj).sort((a, b) => {
    return moment(a, 'YYYY/MM/DD').toDate() - moment(b, 'YYYY/MM/DD').toDate();
  }).forEach(key => {
    eventOrderByDate[key] = eventObj[key];
  });
  return eventOrderByDate;
}

export const EventObjectBuilder = events => {
  const eventSortedByDate = {};
  events.forEach(event => {
    if (event.date in eventSortedByDate) {
      eventSortedByDate[event.date].push(event);
    } else {
      eventSortedByDate[event.date] = [event];
    }
  });
  return eventSortedByDate;
}

const eventDateMapper = (event, phone, name) => {
  const { event_dates } = event;
  if (event_dates && event_dates.length > 0) {
    return event_dates.map(dateOfEvent => {
      const { id, event_id, start_time, end_time, date } = dateOfEvent;
      return {
        id,
        eventId: event_id,
        startTime: start_time,
        endTime: end_time,
        date,
        eventAddress: event.address,
        eventCity: event.city,
        eventState: event.state,
        eventZip: event.zip,
        phoneNumber: phone,
        agencyName: name,
        eventName: event.name,
        eventService: event.service,
      }
    });
  } else {
    return [];
  }
}

export const AgencyHandler = agencies => {
  if (!agencies || !agencies.length > 0) {
    return [];
  }
  const eventDates = [];

  agencies.forEach(agency => {
    const { events, phone, name } = agency;
    if (events && events.length > 0) {
      events.forEach(event => {
        eventDateMapper(event, phone, name).forEach(x => eventDates.push(x));
      });
    }
  });
  return eventDates;
}
