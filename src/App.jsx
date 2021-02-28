import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [startDateWeek, setStartDateWeek] = useState(new Date());
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const weekDates = generateWeekRange(getWeekStartDate(startDateWeek));

  return (
    <>
      <Header
        nextWeek={() => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() + 7)));
  }}
        prevWeek={() => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() - 7)));
  }}
        todayWeek={() => {
    setStartDateWeek(new Date());
  }}
        weekDates={weekDates}
        openModal={() => {
    setIsOpenModalWindow(true);
  }}
      />
      <Calendar weekDates={weekDates} openModal={isOpenModalWindow} closeModal={() => {
    setIsOpenModalWindow(false);
  }} />
    </>
  );
};
export default App;
