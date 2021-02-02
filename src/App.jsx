import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
  };

  handleTodayWeek = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  handleNextWeek = () => {
    const newDate = this.state.weekStartDate;
    this.setState({
      weekStartDate: new Date(newDate.setDate(newDate.getDate() + 7)),
    });
  };

  handlePrevWeek = () => {
    const newDate = this.state.weekStartDate;
    this.setState({
      weekStartDate: new Date(newDate.setDate(newDate.getDate() - 7)),
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          todayWeek={this.handleTodayWeek}
          prevWeek={this.handlePrevWeek}
          nextWeek={this.handleNextWeek}
          weekDates={weekDates}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
