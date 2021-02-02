import React from 'react';
import moment from 'moment';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ todayWeek, prevWeek, nextWeek, weekDates }) => {
  const firstWeekday = moment(weekDates[0]).format('MMMM Y');
  const lastWeekday = moment(weekDates[weekDates.length - 1]).format('MMMM Y');
  const monthName =
    firstWeekday === lastWeekday ? firstWeekday : `${firstWeekday} - ${lastWeekday}`;

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{monthName}</span>
      </div>
    </header>
  );
};

export default Header;
