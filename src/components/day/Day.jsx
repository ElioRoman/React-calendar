import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import './day.scss';

const Day = ({ dataDay, dayEvents, removeEvent,day }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay.getDate()}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay.getDate() + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            removeEvent={removeEvent}
            dayStart={day}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.instanceOf(Date).isRequired,
  dayEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Day;
