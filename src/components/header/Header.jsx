import React from 'react';
import { months } from '../../utils/dateUtils.js';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({ nextWeek, prevWeek, todayWeek, weekDates, openModal }) => {
  const firstDayWeek = months[weekDates[0].getMonth()];
  const lastDayWeek = months[weekDates[0].getMonth()];
  const textMonth =
    firstDayWeek === lastDayWeek ? `${firstDayWeek}` : `${firstDayWeek} - ${lastDayWeek}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{textMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  todayWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Header;
