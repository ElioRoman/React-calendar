import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [startDateWeek, setStartDateWeek] = useState(new Date());
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

  const handleNextWeek = () => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() + 7)));
  };

  const handlePrevWeek = () => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() - 7)));
  };

  const handleTodayWeek = () => {
    setStartDateWeek(new Date());
  };

  const handleOpenModal = () => {
    setIsOpenModalWindow(true);
  };

  const handleCloseModal = () => {
    setIsOpenModalWindow(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(startDateWeek));

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        todayWeek={handleTodayWeek}
        weekDates={weekDates}
        openModal={handleOpenModal}
      />
      <Calendar weekDates={weekDates} openModal={isOpenModalWindow} closeModal={handleCloseModal} />
    </>
  );
};
export default App;
