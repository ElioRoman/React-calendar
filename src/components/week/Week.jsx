import React from 'react';
import Day from '../day/Day';
import moment from 'moment';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({ weekDates, events, removeEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        const redLine =
          moment(dayStart).format('MMMM DD YYYY') == moment(new Date()).format('MMMM DD YYYY');

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            removeEvent={removeEvent}
            day={dayStart}
            redLine={redLine}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Week;
