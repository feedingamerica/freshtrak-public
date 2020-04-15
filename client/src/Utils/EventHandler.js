export const EventDateSorter = events => {
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

export const EventHandler = agencies => {
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
